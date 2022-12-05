import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert";
import Navbar from "../../components/Navbar";
import { EditCategoryParams, ICategory } from "../../interface";
import {
  addNewCategory,
  deleteCategoryData,
  deleteCategoryError,
  editCategory,
  editCategoryData,
  fetchCategories,
  resetCategory,
} from "../../redux/actions/categoryActions";
import { CategoryDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import {
  BlueGreenButton,
  ReverseBlueGreenButton,
  ReverseRedButton,
} from "../../styles/Styled";

function CarCategoriesPage() {
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const [categoryId, setCategoryId] = useState("");
  const {
    categories,
    categoriesLoading,
    categoriesError,
    editCategory,
    delCategory,
    delCategoryError,
    addCategory,
    addCategoryError,
  } = useSelector((state: RootState) => state.categoryReducer);
  const [alertDelete, setAlertDelete] = useState(false);
  const [alertCreate, setAlertCreate] = useState(false);
  const categoryDispatch: CategoryDispatch = useDispatch();

  useEffect(() => {
    categoryDispatch(fetchCategories(pagination));
  }, [
    categoryDispatch,
    pagination,
    editCategory,
    delCategory,
    addCategory,
    addCategoryError,
  ]);

  const handleDelete = () => {
    categoryDispatch(deleteCategoryData(categoryId));
    setAlertDelete(true);
  };

  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      category_name: { value: string };
    };
    const categoryData: EditCategoryParams = {
      id: categoryId,
      category: target.category_name.value,
    };
    categoryDispatch(editCategoryData(categoryData));
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      category_name: { value: string };
    };
    categoryDispatch(addNewCategory(target.category_name.value));
    setAlertCreate(true);
  };

  const handleCloseModal = () => {
    categoryDispatch(resetCategory());
    setAlertDelete(false)
    setAlertCreate(false)
  }
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="d-flex justify-content-end">
            <BlueGreenButton
              data-bs-toggle="modal"
              data-bs-target="#createModal"
            >
              Add New Category
            </BlueGreenButton>
            <div
              className="modal"
              tabIndex={-1}
              id="createModal"
              aria-labelledby="createModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    {alertCreate ? (
                      <>
                        {addCategoryError == "" || addCategoryError == null? (
                          <Alert
                            show={alertCreate}
                            message={"Successfully add new category"}
                            type={"success"}
                          />
                        ) : (
                          <Alert
                            show={alertCreate}
                            message={addCategoryError}
                            type={"danger"}
                          />
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="d-flex justify-content-center mt-4">
                      <h3>Add New Category</h3>
                    </div>
                    <form onSubmit={handleCreate}>
                      <div className="row mt-3 px-4">
                        <input
                          type="text"
                          name="category_name"
                          id="category_name"
                          defaultValue={""}
                          className="form-control"
                        />
                      </div>
                      <div className="d-flex justify-content-center my-3">
                        <BlueGreenButton type="submit">Create</BlueGreenButton>
                      </div>
                    </form>
                    <div className="d-flex justify-content-end">
                      <ReverseBlueGreenButton data-bs-dismiss="modal" onClick={handleCloseModal}>
                        Close
                      </ReverseBlueGreenButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {categoriesLoading ? (
            <p>Loading...</p>
          ) : categoriesError ? (
            <p>Error: {categoriesError}</p>
          ) : categories.data.length == 0 ? (
            <p>No Category Data</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Category ID</th>
                      <th>Category Name</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {categories.data.map((val) => (
                      <tr key={val.category_id}>
                        <td>{val.category_id}</td>
                        <td>{val.category_name}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-2 mt-2">
                            <ReverseBlueGreenButton
                              id={val.category_id?.toString()}
                              data-bs-toggle="modal"
                              data-bs-target="#editModal"
                              onClick={(e) => setCategoryId(e.currentTarget.id)}
                            >
                              Edit
                            </ReverseBlueGreenButton>
                            <div
                              className="modal"
                              tabIndex={-1}
                              id="editModal"
                              aria-labelledby="editModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <div className="d-flex justify-content-center mt-4">
                                      <h3>Edit Category Name</h3>
                                    </div>
                                    <form onSubmit={handleEdit}>
                                      <div className="row mt-3 px-4">
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="category_name"
                                          id="category_name"
                                          defaultValue={""}
                                        />
                                      </div>
                                      <div className="d-flex justify-content-center my-3">
                                        <BlueGreenButton
                                          type="submit"
                                          data-bs-dismiss="modal"
                                        >
                                          Edit Category Name
                                        </BlueGreenButton>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ReverseRedButton
                              id={val.category_id?.toString()}
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                              onClick={(e) => setCategoryId(e.currentTarget.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-trash3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                              </svg>
                            </ReverseRedButton>
                            <div
                              className="modal"
                              tabIndex={-1}
                              id="deleteModal"
                              aria-labelledby="deleteModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    {alertDelete ? (
                                      <>
                                        {delCategoryError != "" || delCategoryError != null ? (
                                          <Alert
                                            show={alertDelete}
                                            message={delCategoryError}
                                            type={"danger"}
                                          />
                                        ) : (
                                          <>
                                            <Alert
                                              show={alertDelete}
                                              message={
                                                "Successfully delete this category"
                                              }
                                              type={"success"}
                                            />
                                          </>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    <div className="d-flex justify-content-center my-3">
                                      <h5>
                                        Are you sure want to delete this
                                        category?
                                      </h5>
                                    </div>
                                    <div className="d-flex justify-content-center gap-2 my-2">
                                      <BlueGreenButton onClick={handleDelete}>
                                        Yes
                                      </BlueGreenButton>
                                      <ReverseBlueGreenButton data-bs-dismiss="modal" onClick={handleCloseModal}>
                                        No
                                      </ReverseBlueGreenButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
        <div className="row">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <button
                  className="page-link"
                  aria-label="Previous"
                  disabled={pagination.page == 1 ? true : false}
                  onClick={() =>
                    setPagination({
                      page: pagination.page - 1,
                      limit: pagination.limit,
                    })
                  }
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array.from(
                { length: categories.total_page },
                (_, i) => i + 1
              ).map((page) => {
                return (
                  <li key={page} className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        setPagination({
                          page: page,
                          limit: pagination.limit,
                        })
                      }
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
              <li className="page-item">
                <button
                  className="page-link"
                  disabled={
                    pagination.page == categories.total_page ? true : false
                  }
                  onClick={() =>
                    setPagination({
                      page: pagination.page + 1,
                      limit: pagination.limit,
                    })
                  }
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default CarCategoriesPage;

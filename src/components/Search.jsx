import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { searchMonitorAsync } from "../redux/actions/actionMonitors";
import { DivForms, FormStyled, InputStyled } from "../styles/FormsStyles";
import { List } from "./List";
import { FilterButton } from "../styles/GlobalStyles";

export const Search = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().required("Required"),
    }),
    onSubmit: ({ search }) => {
      dispatch(searchMonitorAsync(search));
    },
  });

  return (
    <DivForms>
      <h2 className="display-6 fs-2">Buscar monitor</h2>
      <FormStyled className="form" onSubmit={formik.handleSubmit}>
        <div className="d-flex w-100 gap-2">
          <InputStyled
            type="text"
            name="search"
            placeholder="Buscar monitor"
            onChange={formik.handleChange}
          />
          <FilterButton
            className="search"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Buscar
          </FilterButton>
        </div>
      </FormStyled>
      {formik.values.search && <List search={formik.values.search} />}
    </DivForms>
  );
};

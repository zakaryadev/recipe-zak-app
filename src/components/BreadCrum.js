import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { useParams, useLocation, useNavigate } from "react-router-dom";
function BreadCrum() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const paths = pathname.split("/");
  const str = paths[1];
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Breadcrumb>
      <li className="breadcrumb-item">
        <Link role="button" onClick={() => navigate(-1)}>
          {str2}
        </Link>
      </li>
      <li className="breadcrumb-item">
        <Link role="button" to={`/${paths[1]}/${id}`}>
          {paths[2]}
        </Link>
      </li>
    </Breadcrumb>
  );
}

export default BreadCrum;

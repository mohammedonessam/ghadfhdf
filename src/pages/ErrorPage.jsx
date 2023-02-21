import { Alert } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
            <div className="mt-5 text-center mx-auto" style={{ width: '60rem'}} id="error-page">
              <Alert variant="danger">
                <h1>Oops!</h1>
                <Alert.Heading>Sorry, an unexpected error has occurred.</Alert.Heading>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
              </Alert>
            </div>    
  );
}
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import FileManage from "../Components/Pages/FileManage/FileManage";
import Loading from "../Components/Loaders/SquareLoader/loading";
import Documents from "../Components/Pages/Documents";
import Media from "../Components/Pages/Media";
import Home from "../Components/Pages/Home";
import Main from "../Components/Pages/Main/Main";
import Error from "../Components/Pages/Error/Error";

export const Navigation = ({ authenticated, isLoading, user }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={!authenticated ? <Login /> : <Navigate to="/" from="/login" />}
      />
      <Route
        path="/register"
        element={
          !authenticated ? <Register /> : <Navigate to="/" from="/login" />
        }
      />
      {authenticated && (
        <>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Navigate to="/filemange" />} />
            <Route
              path="/filemange"
              element={<Navigate to="/filemange/docs" from="/filemange" />}
            />
            <Route path="/filemange" element={<FileManage />}>
              <Route path="docs" element={<Home user={user} isloading={isLoading} />} />
              <Route exact path="files" element={<Documents user={user} isloading={isLoading}/>} />
              <Route exact path="media" element={<Media user={user} isloading={isLoading} />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </>
      )}

      <Route
        path="*"
        element={!authenticated && !isLoading ? <Error /> : <Loading />}
      />
    </Routes>
  );
};

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizList from './pages/QuizList';
import QuizForm from'./pages/QuizDetails';
import QuizProvider from './QuizContext';
import AddQuiz from './pages/AddQuiz';
import ErrorPage from "./components/ErrorPage";
const route = createBrowserRouter([
    {path:'', element: <QuizList />},
    {path:'quiz-form/:id', element: <QuizForm />},
    {path:'quiz-add', element: <AddQuiz />},
    {
      path: "*",
      element: <ErrorPage />,
    },
]); 

function App() {
  return <QuizProvider> <RouterProvider router={route} /> </QuizProvider>;
}

export default App;

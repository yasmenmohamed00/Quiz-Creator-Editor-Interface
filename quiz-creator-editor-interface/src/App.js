import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizList from './components/QuizList';
import QuizForm from'./components/QuizForm';
import QuizProvider from './QuizContext';
import AddQuiz from './components/AddQuiz';
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

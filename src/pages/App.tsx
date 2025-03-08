import { Link } from "react-router";

function App() {
  return (
    <div>
      <p className="text-xl text-gray-900 dark:text-white">Welcome to Luna Edge Pokemon app. Navigate to
        <span className="underline"> /pokemon</span> for fun ^_^</p>

      <Link to="/pokemon"
            className="mt-4 inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Have fun here...
      </Link>

    </div>
  );
}

export default App;

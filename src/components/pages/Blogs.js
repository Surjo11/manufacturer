import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-5xl font-semibold text-center mb-4 md:mb-6">
              Blogs
            </h2>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
            {/* <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span className="w-8 h-8 inline-flex justify-center items-center bg-gray-800 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-3">
                How will you improve the performance of a React Application?
              </h3>
              <p className="text-gray-500">
                Optimize a application is a key for a developer because if a
                application isn't optimize properly then user experience will
                not good as we expected from a application. React application is
                optimize by default but when a application size expands the
                performance of the app is reduce.For this reason we should care
                about our optimization.Optimize a react application we should
                use only react pure components,take out unnecessary source
                code,use constant and inline elements,use el-lint plugin etc.
              </p>
            </div>
            {/* <!-- question - end -->

            <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span className="w-8 h-8 inline-flex justify-center items-center bg-gray-800 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-3">
                What are the different ways to manage a state in a React
                application?
              </h3>
              <p>
                1. Local State is data we can manage in one component.React
                using the useState hook. <br /> 2. Global State is data we can
                manage multiple components. <br /> 3. Server State come from an
                external server that integrated with UI. <br />
                4. URl State data that exists in URLs and also exists pathname
                and query parameters.
              </p>
            </div>
            {/* <!-- question - end -->

            <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span className="w-8 h-8 inline-flex justify-center items-center bg-gray-800 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-3">
                How does prototypical inheritance work?
              </h3>
              <p className="text-gray-500">
                No answer for this Question.I will try it later.
              </p>
            </div>
            {/* <!-- question - end -->

            <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span className="w-8 h-8 inline-flex justify-center items-center bg-gray-800 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-3">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h3>
              <p className="text-gray-500">
                In react we shouldn't set the state directly becasue react keeps
                track record all its in virtual dom when a change happen all
                components are rendered and compared with old virtual dom then
                only the differences found and reflect on our ui i mean original
                dom.If we set the state directly it will change the reference of
                the virtual dom also that's why react won't be able to see any
                change on that state and won't be reflected in the UI until we
                reload.
              </p>
            </div>
            {/* <!-- question - end -->

      <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span className="w-8 h-8 inline-flex justify-center items-center bg-gray-800 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-3">
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </h3>
              <p className="text-gray-500">
                First of all we need an input field where we can search product
                by name. Then we have to get the value of the search box. After
                that we are going to use loop method in our array.We can use any
                loop method of array.We will use (map) method.
              </p>
            </div>
            {/* <!-- question - end -->

      <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span className="w-8 h-8 inline-flex justify-center items-center bg-gray-800 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-3">
                What is a unit test? Why should write unit tests?
              </h3>
              <p className="text-gray-500">
                Unit testing is performed during the coding stage of a software
                development to test individual units an application.It's test
                each unit of the software code performs.It gives developer to
                testing code,so they can change it also it caught more bugs
                early in the process.
              </p>
            </div>
            {/* <!-- question - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

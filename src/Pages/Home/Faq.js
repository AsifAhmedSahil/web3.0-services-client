export const Faq = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Our Blogs
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <br />
                <br />
              </span>{' '}
              Frequently Asked Questions
            </h2>
            
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  Difference between SQL & NoSQL?
                </p>
                <p className="text-gray-700">
                SQL, which stands for “Structured Query Language,” is the programming language that’s been widely used in managing data in relational database management systems (RDBMS) since the 1970s. In the early years, when storage was expensive, SQL databases focused on reducing data duplication.
                  <br />
                  <br />
                  NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is the Difference between JS & NodeJs?
                </p>
                <p className="text-gray-700">
                JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                  
                </p>
              </div>
              
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is JWT, and How does it work?
                </p>
                <p className="text-gray-700">
                This data is also referred to as the ‘claims’ of the JWT.This information is readable by anyone so it is always advised to not put any confidential information in here. This part generally contains user information. 
                  <br />
                  <br />
                  User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key. Just like any other authentication mechanism, JWT also has its own pros and cons.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </p>
                <p className="text-gray-700">
                When the third request is now also waiting for I/O and returns back to the system, node.js is then free to pull the next event out of the event queue. At this point, all three request handlers are "in flight" at the same time. Only one ever actually runs at once, but all are in process at once
                  .
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
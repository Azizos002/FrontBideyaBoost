// pages/index.js
import NavBar from "../homePage/nav";
export default function Home() {
    return (
        <><NavBar/>
      <div className="min-h-screen bg-white flex justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
          <h1 className="inline-block items-center center bg-yellow-500  mb-4 text-2xl md:text-3xl font-bold px-6 py-2 rounded-lg text-sky-900">Skills and Interest Tests</h1>
          <p className="mb-6 text-gray-500">Take our personalized questionnaires to discover your skills and interests.</p>
  
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Q1 */}
              <div>
                <label className="block text-sm font-medium mb-2">Q1: What is your main area of interest?</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Select...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
  
              {/* Q2 */}
              <div>
                <label className="block text-sm font-medium mb-2">Q2: Do you prefer to work alone or in a team?</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Select...</option>
                  <option>Alone</option>
                  <option>Team</option>
                </select>
              </div>
  
              {/* Q3 */}
              <div>
                <label className="block text-sm font-medium mb-2">Q3: How do you approach challenges?</label>
                <input
                  type="text"
                  placeholder="Logical thinking, hands-on experimentation..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
  
              {/* Q4 */}
              <div>
                <label className="block text-sm font-medium mb-2">Q4: What kind of problems do you like solving?</label>
                <input
                  type="text"
                  placeholder="Technical, social, financial, environmental..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
  
            {/* Submit button */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                To submit
              </button>
            </div>
          </form>
  
          {/* Quiz Section */}
          <div className="mt-8 bg-blue-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
              <img src="/quiz.jpg" alt="Quiz" className="mx-auto w-32" />
                <h2 className="text-lg font-semibold mb-2">Bideya Boost Quiz</h2>
                <p>Measure your interests and skills with our interactive quiz.</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Start now!
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
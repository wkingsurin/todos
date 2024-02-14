import "./App.css";
import "normalize.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h2 className="logo">todos</h2>
          <div className="new-todo">
            <input type="text" className="input" placeholder="Write todo..." />
            <button className="save">save</button>
          </div>
          <hr className="hr" />
          <ul className="todos">
            <li className="todo">
              <div className="text">Wash up</div>
              <div className="interaction">
                <button className="complete">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M4468 4295 c-149 -38 -80 26 -1378 -1271 -657 -657 -1200 -1194
-1205 -1194 -6 0 -235 225 -510 501 -307 307 -523 516 -559 540 -171 113 -405
110 -579 -5 -243 -162 -308 -492 -145 -736 51 -75 1460 -1479 1518 -1513 125
-70 300 -93 420 -53 150 50 74 -22 1571 1475 768 768 1411 1417 1428 1443 18
26 44 78 58 115 24 60 27 82 27 183 0 93 -5 126 -22 175 -56 152 -179 274
-328 326 -78 27 -219 34 -296 14z"
                      />
                    </g>
                  </svg>
                </button>
                <button className="remove">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M1905 5036 c-64 -30 -90 -60 -154 -185 l-52 -101 -597 0 -598 0 -44
-22 c-33 -17 -51 -35 -67 -68 -21 -41 -23 -57 -23 -225 0 -168 2 -184 23 -225
16 -33 34 -51 67 -67 l44 -23 2056 0 2056 0 44 23 c33 16 51 34 68 67 20 41
22 57 22 225 0 168 -2 184 -22 225 -17 33 -35 51 -68 68 l-44 22 -598 0 -597
0 -52 101 c-61 119 -87 152 -143 182 -41 22 -43 22 -656 25 l-615 2 -50 -24z"
                      />
                      <path
                        d="M690 3769 c0 -93 200 -3250 209 -3314 30 -189 185 -350 370 -385 73
-14 2509 -14 2582 0 185 35 340 196 370 385 9 64 209 3221 209 3314 l0 41
-1870 0 -1870 0 0 -41z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

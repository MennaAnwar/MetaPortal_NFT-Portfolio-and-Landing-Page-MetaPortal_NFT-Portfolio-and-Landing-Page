import Button from "../button/Button";
import Pages from "../pages/Pages";
import "./protectedPage.css";

const protectedPage = () => (
  <div className="metaportal_fn_protected">
    <div className="container">
      <Pages
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="358.000000pt"
            height="512.000000pt"
            viewBox="0 0 358.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            className="fn__svg replaced-svg">
            <defs>
              <linearGradient
                id="fn_gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop className="stop1" offset="0%" />
                <stop className="stop2" offset="100%" />
              </linearGradient>
            </defs>

            <g
              fill="url(#fn_gradient)"
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              stroke="none">
              <path d="M1660 5114 c-386 -49 -695 -224 -924 -523 -138 -179 -232 -422 -256 -660 -5 -57 -10 -267 -10 -467 l0 -364 -142 0 c-117 0 -150 -4 -183 -19 -51 -23 -93 -65 -116 -116 -18 -38 -19 -103 -19 -1413 0 -1504 -4 -1410 58 -1476 15 -16 50 -39 77 -52 l50 -24 1595 0 1595 0 50 24 c28 13 62 36 77 52 62 66 58 -28 58 1476 0 1310 -1 1375 -19 1413 -23 51 -65 93 -116 116 -33 15 -66 19 -182 19 l-143 0 0 364 c0 200 -5 410 -10 467 -59 581 -489 1053 -1062 1164 -82 16 -310 27 -378 19z m304 -479 c301 -62 542 -282 642 -585 l28 -85 4 -432 3 -433 -851 0 -851 0 3 433 4 432 28 85 c99 300 338 520 636 584 87 19 264 20 354 1z m1146 -3080 l0 -1085 -1320 0 -1320 0 0 1085 0 1085 1320 0 1320 0 0 -1085z" />
              <path d="M1685 2157 c-152 -51 -251 -164 -276 -318 -19 -118 21 -241 107 -324 l44 -43 0 -179 c0 -158 3 -183 21 -223 42 -92 107 -134 209 -134 102 0 167 42 209 134 18 40 21 65 21 223 l0 179 44 43 c189 183 129 505 -114 619 -51 24 -80 30 -145 33 -48 2 -96 -2 -120 -10z" />
            </g>
          </svg>
        }
        title="Protected Page"
        text="Please, enter the password to have access to this page."
        inputType="password"
        btnText={<Button text="Authenticate" />}
      />
    </div>
  </div>
);

export default protectedPage;

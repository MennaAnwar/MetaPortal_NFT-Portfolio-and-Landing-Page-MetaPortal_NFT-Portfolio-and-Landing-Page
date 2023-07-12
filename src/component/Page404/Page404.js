import { Link } from "react-router-dom";
import Pages from "../Pages/Pages";

const Page404 = () => (
  <div className="metaportal_fn_404">
    <div className="container small">
      <Pages
        icon={<h3 className="fn__gradient_title">404</h3>}
        title="404 Page Not Found"
        text="            Sorry, but the page you are looking for was moved, removed, renamed
            or might never existed..."
        inputType="text"
        btnText={
          <Link to="/404" className="metaportal_fn_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fn__svg replaced-svg">
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M2075 5113 c-437 -38 -840 -195 -1200 -466 -103 -78 -324 -299 -402 -402 -406 -538 -555 -1178 -427 -1825 128 -644 551 -1218 1131 -1532 783 -426 1728 -355 2438 181 l80 61 545 -543 c300 -299 558 -551 573 -561 43 -26 119 -32 171 -12 53 20 109 78 126 131 15 46 7 124 -16 162 -10 15 -262 273 -561 573 l-543 545 61 80 c852 1129 472 2742 -796 3378 -352 177 -798 264 -1180 230z m432 -429 c913 -133 1583 -903 1583 -1819 0 -1014 -821 -1835 -1835 -1835 -695 0 -1322 386 -1639 1010 -227 446 -260 972 -89 1445 138 384 411 723 751 934 159 99 356 184 522 227 207 53 499 69 707 38z" />
              </g>
            </svg>
          </Link>
        }
      />
    </div>
  </div>
);

export default Page404;

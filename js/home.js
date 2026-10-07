/* =========================================================
   HSE DEPARTMENT - HOME PAGE JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenuButton && mobileNav) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            mobileNav.classList.toggle("show");

        }
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

const searchButton =
    document.getElementById("searchButton");

const searchOverlay =
    document.getElementById("searchOverlay");

const searchClose =
    document.getElementById("searchClose");

const searchInput =
    document.getElementById("searchInput");

const searchSubmit =
    document.getElementById("searchSubmit");


if (searchButton && searchOverlay) {

    searchButton.addEventListener(
        "click",
        function () {

            searchOverlay.classList.add("show");

            if (searchInput) {
                setTimeout(
                    function () {
                        searchInput.focus();
                    },
                    100
                );
            }

        }
    );

}


if (searchClose && searchOverlay) {

    searchClose.addEventListener(
        "click",
        function () {

            searchOverlay.classList.remove("show");

        }
    );

}


/* =========================================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
   ========================================================= */

if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === searchOverlay) {

                searchOverlay.classList.remove("show");

            }

        }
    );

}


/* =========================================================
   SEARCH SUBMIT
   ========================================================= */

if (searchSubmit && searchInput) {

    searchSubmit.addEventListener(
        "click",
        function () {

            const keyword =
                searchInput.value.trim();

            if (keyword === "") {

                alert(
                    "Silakan masukkan kata yang ingin dicari."
                );

                searchInput.focus();

                return;
            }


            /*
             * Untuk sementara pencarian masih berupa
             * placeholder.
             *
             * Nanti setelah halaman Berita, Regulasi,
             * Dokumen dan halaman lainnya selesai,
             * fungsi pencarian akan kita hubungkan
             * ke seluruh website.
             */

            alert(
                'Pencarian untuk "' +
                keyword +
                '" akan tersedia setelah sistem pencarian HSE selesai.'
            );

        }
    );

}


/* =========================================================
   ENTER KEY SEARCH
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                if (searchSubmit) {
                    searchSubmit.click();
                }

            }

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
   ========================================================= */

if (mobileNav) {

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNav.classList.remove("show");

                }
            );

        }
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        "© " +
        currentYear +
        " HSE Department. All rights reserved.";

}

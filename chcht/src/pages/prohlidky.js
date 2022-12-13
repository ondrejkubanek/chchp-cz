<!-- Some of those will be only once in React! -->
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prohlídky | CHCHP</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <script src="https://kit.fontawesome.com/587366a1da.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link href="css/bootstrap.css" rel="stylesheet" /> 
    <link href="css/styles.css" rel="stylesheet" />
  </head>
  <body>
    <!-- Navbar  -->
    <nav class="navbar navbar-default navbar-expand-lg p-md-3">
      <div class="container">
        <a class="navbar-brand " href="./index.html"><img id="ico" class="logo"src="./img/logos/logo-white.png" alt="CHCHP - logo"></a>
        <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="./prohlidky.html">PROHLÍDKY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./zazitky.html">ZÁŽITKY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./pronajem.html">PRONÁJEM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./kontakt.html">KONTAKT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="https://www.instagram.com/chramchmeleapiva" target="_blank"><i class="fab fa-icon fa-instagram fa-15x"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="https://www.facebook.com/chchp" target="_blank"><i class="fab fa-facebook fa-15x" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Title Image  -->
    <div class="banner prohlidky-image w-100 vh-100 d-flex align-items-center">
      <div class="page-title container">
        <h1 class="long text-white pt-6 ">ZÁBAVA PRO VŠECHNY VĚKOVÉ SKUPINY</h1>
        <p class="py-3 text-white text-title">Chmelový maják, chmelový labyrint, pracovna alchymisty, erbovní síň, Galerie Sladovna či největší chmelařské muzeum na světě  na jednom místě v Žatci.</p>
        <a class="btn btn-primary my-3" href="#prohlidky" role="button">ZJISTI VÍCE</a>
        <a class="btn btn-light my-3" href="https://rezervace.chchp.cz" target="_blank" role="button">REZERVAČNÍ SYSTÉM</a>
      </div>
    </div>

    <!-- Zazitky section -->
    <section id="prohlidky" class="prohlidky">
        <div class="container">
            <h3 class="short">Prohlídkové okruhy</h3>
            <div class="row">
              <!-- Tour -->
                <div class="col-lg-5 tour-padding tour-photo">
                  <img src="img/tours/Okruh-A.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
                </div>
                <div class="col-lg-7 tour-padding ">
                  <h4>Okruh A</h4>
                  <div class="text">
                    <b>Prohlídka s průvodcem zahrnující vnitřní expozici Chrámu Chmele a&nbsp;Piva a&nbsp;Galerii Sladovna.</b>
                    <div class="paragraf">
                      Plné vstupné: 140 Kč dospělí
                      <br>Zlevněné vstupné: 100 Kč děti, senioři (65 a více let) a ZTP
                      <br>Rodinné vstupné: 340 Kč rodinné vstupné (2 dospělí + až 3 děti)
                      
                    </div>
                    <div class="paragraf">
                      Doba prohlídky: 90 min
                      <br>Prohlídky začínají v každou celou hodinu od 10:00 do 15:00. Doporučujeme si <a href="https://rezervace.chchp.cz" target="_blank">vytvořit rezervaci</a>.
                    </div>
                    Uvidíte expozici v bývalém skladu chmele, kterou tvoří labyrint z&nbsp;chmelových žoků, erbovní síň, tajuplná pracovna alchymisty a&nbsp;chmelový poklad. Dále Vás čeká zastávka u&nbsp;Chmelového Orloje, kde se dozvíte jestli se dostanete do pivního pekla nebo ráje a mnoho dalšího, co jediný chmelový orloj v ČR ukazuje. Na závěr navštívíte Galerii Sladovnu s expozicí Sladovnictví, kde se dozvíte, jak se vyráběl slad jako surovina na výrobu piva.
                    <div class="paragraf">
                      <b>V prodeji po celý rok.</b>
                    </div>
                  </div>
                </div>
              <!-- Tour -->
              <div class="col-lg-5 tour-padding tour-photo">
                <img src="img/tours/Okruh-B.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
              </div>
              <div class="col-lg-7 tour-padding">
                <h4>Okruh B</h4>
                <div class="text">
                  <b>Společná vstupenka zahrnující vnitřní expozici Chrámu Chmele a Piva, Galerii Sladovna a Chmelařské muzeum.</b>
                  <div class="paragraf">
                    Plné vstupné: 190 Kč dospělí
                    <br>Zlevněné vstupné: 140 Kč děti, senioři (65 a více let) a ZTP
                    <br>Rodinné vstupné: 430 Kč rodinné vstupné (2 dospělí + až 3 děti)
                  </div>
                  <div class="paragraf">
                    Doba prohlídky: 165 min 
                    <br>Prohlídky začínají v každou celou hodinu od 10:00 do 15:00 v Chrámu Chmele a Piva. Doporučujeme si <a href="https://rezervace.chchp.cz" target="_blank">vytvořit rezervaci</a>.
                  </div>
                  Společná vstupenka neplatí pro zájezdy a organizované skupiny. Platnost společné vstupenky je dva dny.
                  <div class="paragraf">
                    <b>V prodeji pouze od dubna do října.</b>
                  </div>
                  
                </div>
              </div>
              <!-- Tour -->
              <div class="col-lg-5 tour-padding tour-photo">
                <img src="img/tours/Okruh-C.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
              </div>
              <div class="col-lg-7 tour-padding">
                <h4>Okruh C</h4>
                <div class="text">
                  <b>Prohlídka zahrnující expozice v Galerie Sladovna (Sladovnictví, Žatec ve filmu, Historie Neobyčejné tužky a aktuální výstavu umění v hlavní galerii).</b>
                  <div class="paragraf">
                    Plné vstupné: 70 Kč dospělí
                    <br>Zlevněné vstupné: 60 Kč děti, senioři (65 a více let) a ZTP
                    <br>Rodinné vstupné: 180 Kč rodinné vstupné (2 dospělí + až 3 děti)
                  </div>
                  <div class="paragraf">
                    Doba prohlídky: 45 min
                    <br>Na tento okruh není rezervace nutná.
                  </div>
                  Uvidíte expozice v renesanční a zároveň nejstarší dochované Sladovně pocházející ze 16. století. Čeká na vás stálá výstava Sladovnictví, Žatec ve filmu a Historie Neobyčejné tužky. V prvním patře se nachází také hlavní galerie, ve které se několikrát do roka obměňují výstavy různých umělců.
                  <div class="paragraf">
                    <b>V prodeji po celý rok.</b>
                  </div>
                </div>
              </div>
              <!-- Tour -->
              <div class="col-lg-5 tour-padding tour-photo">
                <img src="img/tours/Okruh-D.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
              </div>
              <div class="col-lg-7 tour-padding">
                <h4>Okruh D</h4>
                <div class="text">
                  <b>Prohlídka s průvodcem a 3D projekcí ve Chmelovém majáku.</b>
                  <div class="paragraf">
                    Plné vstupné: 110 Kč dospělí
                    <br>Zlevněné vstupné: 90 Kč děti, senioři (65 a více let) a ZTP
                    <br>Rodinné vstupné: 270 Kč rodinné vstupné (2 dospělí + 3 děti)
                    
                  </div>
                  <div class="paragraf">
                    Doba prohlídky: 20 min
                    <br>Prohlídky začínají každou půl hodinu od 10:00 do 16:30. Doporučujeme si <a href="https://rezervace.chchp.cz" target="_blank">vytvořit rezervaci</a>.
                  </div>
                  Prohlídka s průvodcem prostřednictvím unikátního výtahu s 3D projekcí kde uvidíte ojedinělou animaci. Chmelový maják je dominanta celého areálu chmelařských technických památek a plní několik funkcí najednou. Vy prostřednictvím výtahu vyjedete do 2/3 výšky a zároveň uvidíte chmelařské město Žatec se svými chmelařskými skvosty.
                  <div class="paragraf">
                    <b>V prodeji pouze v letní turistické sezóně.</b>
                  </div>
                </div>
              </div>
              <!-- Tour -->
              <div class="col-lg-5 tour-padding tour-photo">
                <img src="img/tours/Okruh-E.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
              </div>
              <div class="col-lg-7 tour-padding">
                <h4>Okruh E</h4>
                <div class="text">
                  <b>Pěší výstup na rozhlednu Chmelový maják. V případě zájmu si můžete při zakoupení vstupenky za vratnou zálohu půjčit dalekohled.</b>
                  <div class="paragraf">
                    Plné vstupné: 60 Kč dospělí
                    <br>Zlevněné vstupné: 50 Kč děti, senioři (65 a více let) a ZTP
                    <br>Rodinné vstupné: 140 Kč rodinné vstupné (2 dospělí + 3 děti)
                  </div>
                  <div class="paragraf">
                    Doba prohlídky: záleží na vás 😊
                    <br>Na tento okruh není rezervace nutná.
                  </div>
                  Samostatná prohlídka na dominantu celého areálu se zastávkami s výhledem na chmelařské město Žatec a jeho architekturu. Cesta na vrchol je sice fyzicky náročná, ale stojí za to.                  <div class="paragraf">
                    <div class="paragraf">
                      <b>V prodeji po celý rok.</b>
                    </div>
                  </div>
                </div>
              </div>

               <!-- Tour -->
               <div class="col-lg-5 tour-padding tour-photo">
                <img src="img/tours/Okruh-F.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
              </div>
              <div class="col-lg-7 tour-padding">
                <h4>Okruh F</h4>
                <div class="text">
                  <b>Prohlídka s průvodcem zahrnující vnitřní expozici Chrámu Chmele a Piva.</b>
                  <div class="paragraf">
                    Plné vstupné: 110 Kč dospělí
                    <br>Zlevněné vstupné: 80 Kč děti, senioři a ZTP
                    <br>Rodinné vstupné: 260 Kč rodinné vstupné (2 dospělí + až 3 děti)
                  </div>
                  <div class="paragraf">
                    Doba prohlídky: 45 min
                    Prohlídka začíná vždy jen v 16:00. Doporučujeme si <a href="https://rezervace.chchp.cz" target="_blank">vytvořit rezervaci</a>.
                  </div>
                  Uvidíte expozici v bývalém skladu chmele, kterou tvoří labyrint z chmelových žoků, erbovní síň, tajuplná pracovna alchymisty a chmelový poklad. Dále Vás čeká zastávka u Chmelového Orloje, kde se dozvíte jestli se dostanete do pivního pekla nebo ráje a mnoho dalšího, co jediný chmelový orloj v ČR ukazuje.
                  <div class="paragraf">
                    <b>V prodeji po celý rok.</b>
                  </div>
                </div>
              </div>

              <!-- Tour -->
              <div class="col-lg-5 tour-padding tour-photo">
                <img src="img/tours/Muzeum-Homolupulu.jpg" class="img-fluid ripple rounded ripple-surface-light" alt="Responsive image">
              </div>
              <div class="col-lg-7 tour-padding">
                <h4>Muzeum Homolupulů</h4>
                <div class="text">
                  <div class="paragraf">
                    Že nevíte, co je Homo Lupulus? Jedná se o dávnou civilizaci statných mužů a něžných žen, obývající chmeloviště na Žatecku, která dala světu nejlepší chmel, atletiku, pivo, notový klíč, sedmý schod a mnoho dalšího…
                    Poklonit se ostatkům nejstaršího pivaře na světě a objevit homolupulské geny i v sobě můžete v Muzeu Homolupulů v Žatci. To musíte zažít! Chmelu, chmel!                      
                  </div>
                  <div class="paragraf">
                    Na prohlídku je NUTNÁ <a href="https://rezervace.chchp.cz" target="_blank">rezervace</a>.
                  </div>
                </div>
              </div>
              

            </div>
        </div>
    </section>

    <!-- Footer section -->
  

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>

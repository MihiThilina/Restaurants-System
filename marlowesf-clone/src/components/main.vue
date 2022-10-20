<script setup>
import NavBar from "../components/navBar.vue";
</script>

<template>
  <main>
    <!-- Header Section----------------------------------------------------------------- -->
    <div class="mainHeder">
      <div class="main-img">
        <va-image
          class="logo"
          src="../../src/assets/img/12898logo-transparent2-min.png"
        />
      </div>
      <NavBar></NavBar>
    </div>
    <!-- -----Foood Slider --------------------------------------------------- -->
    <div class="main">
      <section class="imageSlider">
        <section>
          <div>
            <va-image src="../../src/assets/img/mainImg.jpg" />
          </div>
          <div>
            <va-image
              src="https://images.getbento.com/accounts/a0c808d1b363513c944cd3d8fb0215af/media/3cuCfsJzToONsUSku9QF_EWP2014_marlowe_brannan-3974.jpg?w=1200&fit=max&auto=compress,format"
            />
          </div>
          <div>
            <va-image
              src="https://media-cdn.tripadvisor.com/media/photo-m/1280/16/e3/b3/89/full-spread.jpg"
            />
          </div>
          <div>
            <va-image
              src="https://images.getbento.com/accounts/a0c808d1b363513c944cd3d8fb0215af/media/images/26198Marlowe_AR38188.jpg?w=1200&fit=max&auto=compress,format"
            />
          </div>
        </section>
      </section>
    </div>

    <!-- ---------------------Welcome topic---------------------- -->

    <div class="Wel-Topic">
      <h1>Welcome Back to Marlowe</h1>
    </div>

    <!-- ------------- More Details  Marlowe ------------- -->

    <section class="More_Details">
      <div>
        <va-image
          style="width: 76vw; height: 60vh"
          src="https://images.getbento.com/accounts/a0c808d1b363513c944cd3d8fb0215af/media/images/78896xmmbwgp1SyiGC2BdBjcX_EWP2014_marlowe_brannan-3673.jpeg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.48&fp-y=0.51"
        />
      </div>
      <div>
        <h1 class="underLine">___________________________</h1>
        <h1 class="OurMenu">OUR MENU</h1>
        <h1 class="underLine">___________________________</h1>
        <div class="view-menu">
          <button>VIEW MENU</button>
        </div>
      </div>
    </section>

    <!-- end----------------------------- -->

    <footer>
      <div class="footer-backgrond">
         <h3>create by thilina</h3>
        <va-image style=" width: 79vw; height: 10vh;"  src="../../src/assets/img/mainmarblebackground.jpeg"/>
      </div>
    </footer>
  </main>
</template>

<style></style>

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
       <div class="fotter">
        <a class="instergrm" href="https://www.instagram.com/marlowesf/" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Instagram, Footer"><span class="fa fa-instagram" aria-hidden="true"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABe0lEQVRIie2WPUoDQRTHf9qaYJOk0jqFgjGFUcQjCBo8hjlE8ARRcwhDwMLKwiNoLqGdyu6aIimiFvMWhiE7H+wIFvnDY7O8j9+82TdDYKV/oAZwBUyAKfDjaVPgRXLrodALIAuAFVkKdEOg3xGguS184I1InZqWYGz7ugHuAVXX6jx0DJxo75vApQ18GgGa110Lqe3a5hkwADrAhlgHuAHmjtzMBrYlvgJ7ltyWxNhqBINnGnQbGEsHGXAPNMW37+g8GDzQoB9L/J/iA7iNCT4Q/9gSM5KYw5jgivhtw5dKTNUHbB6nMrJ2ZMoXvCPPJ0vMozx3QxaQq2iLrsXfRA2S6X8HtiRmaKkTDJ6hzimo6R2hvmkK3GnQNpGPU36BtIpTaQNvjhqFcl2Zc9T1eISa9Ir8Hjo61ad+qSaO5DL2rIPMqX6wraqkrLXrqC2J3W0C1Fwr66L+rsSCLoAzF1SHJ5E6PfeF5qoBfdRQfAXAMsnp47G9K/25fgH7R22w5ouqlAAAAABJRU5ErkJggg=="></span></a>
        <a class="contact" href="/contact/">CONTACT</a>
       </div>
      <div class="footer-backgrond">
         <h3>create by thilina</h3>
        <va-image style=" width: 79vw; height: 10vh;"  src="../../src/assets/img/mainmarblebackground.jpeg"/>
      </div>
    </footer>
  </main>
</template>

<style></style>

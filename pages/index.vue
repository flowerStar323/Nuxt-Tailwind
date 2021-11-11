<template>
  <div class="max-w-360 min-w-360">
    <div class="w-screen h-sm bg-topDiv bg-no-repeat fixed z-10 t-0" />
    <div
      class="
        w-screen
        h-md
        text-secondary
        mt-sm
        shadow-md
        header
        bg-white
        font-Lato
        text-14
        rounded-b-lg
        fixed
        z-10
        tracking-wider
        pt-lg
        pl-xl
        hover:underline
      "
    >
      Login
    </div>
    <div>
      <div
        class="
          title
          font-Lato
          text-42
          pt-md
          tracking-widest
          text-danger text-center
        "
      >
        Deine Job <br />
        website
      </div>
      <div class="bg-mainImg bg-no-repeat mt-md h-1/6 flex justify-center" />
      <div class="bg-no-repeat bg-tagDiv bg-100 h-1/5 -mt-24 pt-10 relative">
        <div class="tag-header duration-0.2 flex absolute ml-12">
          <div class="cover duration-0.2 absolute h-lg w-1/3" />
          <div
            data-index="1"
            v-on:click="changeTag(1)"
            class="
              one
              bg-tagColor bg-no-repeat
              font-Lato
              z-5
              h-lg
              w-1/3
              font-semibold
              text-14
              tracking-wider
              flex
              justify-center
              border border-primary
              items-center
              text-white
              rounded-l-lg
              animateMenu
            "
          >
            <span class="frontext1">Arbeitnehmer</span>
          </div>
          <div
            data-index="2"
            v-on:click="changeTag(2)"
            class="
              one
              border border-primary
              font-Lato
              h-lh
              w-1/3
              font-semibold
              bg-tagColor bg-no-repeat
              text-14
              tracking-wider
              text-secondary
              flex
              justify-center
              animateMenu
              items-center
            "
          >
            <span class="frontext2">Arbeitgeber</span>
          </div>
          <div
            data-index="3"
            v-on:click="changeTag(3)"
            class="
              bg-tagColor bg-no-repeat
              font-Lato
              one
              border border-primary
              w-1/3
              h-lg
              font-semibold
              text-14
              tracking-wider
              text-secondary
              flex
              justify-center
              items-center
              animateMenu
              rounded-r-lg
            "
          >
            <span class="frontext3">Temporärbüro</span>
          </div>
        </div>
        <div class="first-tag">
          <div class="mt-lg text-center text-info font-Lato text-sm">
            Drei einfache Schritte zur<br />
            Vermittlung neuer Mitarbeiter
          </div>
          <div class="h-1/7 w-1/2 bg-woman bg-no-repeat ml-xl mt-24" />
          <div class="flex">
            <div class="first mt-M75 ml-md text-success font-Lato text-130">
              1.
            </div>
            <div
              class="
                tracking-wide
                erste
                font-Lato
                text-16
                mt-35
                ml-12
                text-success
              "
            >
              Erstellen dein Lebenslauf
            </div>
          </div>
          <div class="flex mt-24">
            <div
              class="second font-Lato text-center ml-30 text-130 text-success"
            >
              2.
            </div>
            <div
              class="
                erhalte
                font-Lato
                text-16 text-success
                tracking-wide
                mt-93
                ml-12
              "
            >
              Erhalte Vermittlungs- <br />
              angebot von Arbeitgeber
            </div>
          </div>
          <div class="task bg-task bg-no-repeat w-181 h-127 ml-112" />
          <div class="flex">
            <div
              class="
                text-center text-success text-130
                font-Lato
                third
                mt-24
                ml-50
              "
            >
              3.
            </div>
            <div
              class="
                mit
                font-Lato
                text-16 text-success
                tracking-wide
                mt-90
                ml-21
              "
            >
              Mit nur einem Klick <br />
              bewerben
            </div>
          </div>
          <div
            class="
              personal
              mt-M40
              bg-personal bg-no-repeat
              w-281
              h-210
              float-right
            "
          />
        </div>
        <div class="second-tag hidden">
          <div class="mt-lg text-center text-info font-Lato text-sm">
            Drei einfache Schritte <br />
            zu deinem neuen Mitarbeiter
          </div>
          <div class="h-1/7 w-1/2 bg-woman bg-no-repeat ml-xl mt-24" />
          <div class="flex">
            <div class="first mt-M75 text-success ml-md font-Lato text-130">
              1.
            </div>
            <div
              class="
                second-erste
                font-Lato
                text-16
                tracking-wide
                text-success
                mt-18
                ml-12
              "
            >
              Erstellen dein <br />
              Unternehmensprofil
            </div>
          </div>
          <div class="flex mt-24">
            <div
              class="second font-Lato text-130 text-center ml-30 text-success"
            >
              2.
            </div>
            <div
              class="
                text-16
                second-erhalte
                font-Lato
                text-success
                tracking-wide
                mt-110
                ml-12
              "
            >
              Erstellen ein Jobinserat
            </div>
          </div>
          <div
            class="second-task mt-55 ml-50 bg-man bg-no-repeat w-260 h-180"
          />
          <div class="flex">
            <div
              class="
                text-center text-success
                font-Lato
                third
                text-130
                mt-24
                ml-50
              "
            >
              3.
            </div>
            <div
              class="
                mit
                font-Lato
                text-16 text-success
                tracking-wide
                mt-90
                ml-21
              "
            >
              Wähle deinen<br />
              neuen Mitarbeiter aus
            </div>
          </div>
          <div
            class="
              second-personal
              bg-mobile bg-no-repeat
              w-281
              h-210
              mt-12
              ml-lg
            "
          />
        </div>
        <div class="third-tag hidden">
          <div class="mt-lg text-center text-info font-Lato text-sm">
            Drei einfache Schritte zur<br />
            Vermittlung neuer Mitarbeiter
          </div>
          <div class="h-1/7 w-1/2 bg-woman bg-no-repeat ml-xl mt-24" />
          <div class="flex">
            <div class="first mt-M75 ml-md font-Lato text-success text-130 mt-">
              1.
            </div>
            <div
              class="
                second-erste
                font-Lato
                text-16
                tracking-wide
                text-success
                mt-18
                ml-12
              "
            >
              Erstellen dein <br />
              Unternehmensprofil
            </div>
          </div>
          <div class="flex mt-24">
            <div
              class="second font-Lato text-center text-130 ml-30 text-success"
            >
              2.
            </div>
            <div
              class="erhalte font-Lato text-success tracking-wide mt-93 ml-12"
            >
              Erhalte Vermittlungs- <br />
              angebot von Arbeitgeber
            </div>
          </div>
          <div class="third-task bg-list ml-102 bg-no-repeat w-1/2 h-1/7" />
          <div class="flex">
            <div
              class="
                text-center text-success
                font-Lato
                third
                text-130
                mt-24
                ml-50
              "
            >
              3.
            </div>
            <div
              class="
                third-mit
                font-Lato
                text-16
                tracking-wide
                text-success
                mt-95
                ml-21
              "
            >
              Vermittlung nach<br />
              Provision oder <br />
              Stundenlohn
            </div>
          </div>
          <div
            class="
              third-personal
              bg-dollar bg-no-repeat
              w-281
              h-210
              mt-md
              ml-lg
            "
          />
        </div>
      </div>
    </div>
    <div
      class="
        h-xl
        w-screen
        flex
        justify-center
        items-center
        bg-white
        absoulte
        fixed
        bottom-0
        rounded-t-lg
        shadow-sm
      "
    >
      <div
        class="
          hover:bg-white-500
          rounded-lg
          font-Lato
          register-btn
          bg-RegisterBtn bg-no-repeat
          font-Lato
          text-14
          tracking-wider
          text-primary
          flex
          items-center
          justify-center
          w-1/7
          h-lg
        "
      >
        Kostenlos Registrieren
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    document.querySelector(".tag-header").style = "transform:translate(0px)";
    document.querySelector(".cover").style =
      "transform:translate(0px);border-radius:12px 0 0 12px;background-color: #81E6D9;z-index: -1;";
  },
  methods: {
    changeTag: function (index) {
      if (index == 1) {
        document.querySelector(".second-tag").style = "display:none";
        document.querySelector(".third-tag").style = "display:none";
        document.querySelector(".first-tag").style = "display:block";
        document.querySelector(".frontext2").style =
          "z-index: 0;color: #319795;";
        document.querySelector(".frontext3").style =
          "z-index: 0;color: #319795;";
        document.querySelector(".frontext1").style = "z-index: 5;color: white;";
        document.querySelector(".cover").style =
          "transform:translate(0px);border-radius:12px 0 0 12px;background-color: #81E6D9;z-index: -1;";
        document.querySelector(".tag-header").style =
          "transform:translate(0px)";
      }
      if (index == 2) {
        document.querySelector(".second-tag").style = "display:block";
        document.querySelector(".third-tag").style = "display:none";
        document.querySelector(".first-tag").style = "display:none";
        document.querySelector(".frontext1").style =
          "z-index: 0;color: #319795;";
        document.querySelector(".frontext3").style =
          "z-index: 0;color: #319795;";
        document.querySelector(".frontext2").style = "z-index: 5;color: white;";
        document.querySelector(".cover").style =
          "border-radius:0;transform:translate(160px);background-color: #81E6D9;z-index: -1;";
        document.querySelector(".tag-header").style =
          "transform:translate(-85px)";
      }
      if (index == 3) {
        document.querySelector(".second-tag").style = "display:none";
        document.querySelector(".third-tag").style = "display:block";
        document.querySelector(".first-tag").style = "display:none";
        document.querySelector(".frontext1").style =
          "z-index: 0;color: #319795;color:#319795;";
        document.querySelector(".frontext2").style =
          "z-index: 0;color: #319795;";
        document.querySelector(".frontext3").style = "z-index: 5;color: white;";
        document.querySelector(".cover").style =
          "transform:translate(320px);border-radius:0 12px 12px 0;background-color: #81E6D9;z-index: -1;";
        document.querySelector(".tag-header").style =
          "transform:translate(-165px)";
      }
    },
  },
};
</script>

<style scoped>
</style>

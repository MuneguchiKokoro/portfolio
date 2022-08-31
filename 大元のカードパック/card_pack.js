new Vue({
        el: "#app",
        data() {
          return {
            packStatus: false,
            imgUrl:
              "https://static.papayaplay.com/static/assets/images/bs_mobile/new_teaser",
            weapon_card_data: [
              {
                category: "normal",
                cardFront: "/weapons/weapon1.png",
                cardBack: "/card_back.png",
                name: "M4a1",
                desc:
                  "LEGENDARY<br/> Famous and standard rifle.\nFully automatic variant of the basic M4 carbine intended for special operations use.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "normal",
                cardFront: "/weapons/weapon2.png",
                cardBack: "/card_back.png",
                name: "ak47",
                desc:
                  "Rifle with great damage and accuracy but slow rate of fire.\nThe most popular and widely used assault rifle in the world",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "epic",
                cardFront: "/weapons/weapon3.png",
                cardBack: "/card_back.png",
                name: "fw14",
                desc:
                  "Futuristic high-performance rifle with powerful damage but slow rate of fire.\nDesigned for a fierce gunfight from mid range to long range.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "legendary",
                cardFront: "/weapons/weapon4.png",
                cardBack: "/card_back.png",
                name: "p90",
                desc: "Bullpup SMG with many bullets.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "rare",
                cardFront: "/weapons/weapon5.png",
                cardBack: "/card_back.png",
                name: "kriss vector",
                desc:
                  "High rate of fire for close combat.<br/>With in-line design to reduce perceived recoil and muzzle climb.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "epic",
                cardFront: "/weapons/weapon6.png",
                cardBack: "/card_back.png",
                name: "KSG15",
                desc: "Pump-action shotgun with many bullets.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "normal",
                cardFront: "/weapons/weapon7.png",
                cardBack: "/card_back.png",
                name: "DOUBLE BARREL",
                desc:
                  "Shotgun with great firepower for close combat.\nMore compact than repeating designs such as pump action or lever-action shotguns.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "normal",
                cardFront: "/weapons/weapon8.png",
                cardBack: "/card_back.png",
                name: "DOUBLE BARREL",
                desc:
                  "Shotgun with great firepower for close combat.\nMore compact than repeating designs such as pump action or lever-action shotguns.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "rare",
                cardFront: "/weapons/weapon9.png",
                cardBack: "/card_back.png",
                name: "DOUBLE BARREL",
                desc:
                  "Shotgun with great firepower for close combat.\nMore compact than repeating designs such as pump action or lever-action shotguns.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
              {
                category: "legendary",
                cardFront: "/weapons/weapon10.png",
                cardBack: "/card_back.png",
                name: "DOUBLE BARREL",
                desc:
                  "Shotgun with great firepower for close combat.\nMore compact than repeating designs such as pump action or lever-action shotguns.",
                isFlip: false,
                classname: "",
                remove: "",
                show: "",
                isActive: false,
              },
            ],
          };
        },
        methods: {
          mouseEnter(index) {
            console.log("mouseneter", index);
            this.weapon_card_data[index].isActive = true;
            this.$el.addEventListener("mousemove", this.mouseMove, false);
          },
          mouseLeave(index) {
            this.weapon_card_data[index].isActive = false;
          },
          mouseMove() {
            var tooltip = $(".weapon--desc");
            // tooltip.css("left", event.clientX - );
            // tooltip.css("top", event.clientY - 100);
            console.log(event.clientX, event.clientY);
          },
          openPack: function () {
            this.packStatus = true;
            console.log("click");
            var tl = new TimelineMax();
            tl.fromTo(
              ".weapon-card-container",
              0.4,
              {
                display: "none",
              },
              {
                scaleX: 1,
                scaleY: 1,
                display: "block",
              }
            );

            tl.fromTo(
              ".weapon-card-wrapper:nth-child(1)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                top: 0,
                left: 0,
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(2)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                top: 0,
                left: "21%",
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(3)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                margin: "20px auto",
                top: 0,
                left: 0,
                right: 0,
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(4)",
              0.8,
              {
                opacity: 0,
                scale: 3,
              },
              {
                top: 0,
                left: "63%",
                opacity: 1,
                scale: 1,
                ease: "Bounce.easeOut",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(5)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                top: 0,
                right: 0,
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(6)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                bottom: 0,
                left: 0,
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(7)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                bottom: 0,
                left: "21%",
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(8)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                margin: "20px auto",
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(9)",
              0.2,
              {
                opacity: 0,
                scale: 3,
              },
              {
                bottom: 0,
                left: "63%",
                opacity: 1,
                scale: 1,
                ease: "Back.easeInOut(4)",
              }
            );
            tl.fromTo(
              ".weapon-card-wrapper:nth-child(10)",
              0.8,
              {
                opacity: 0,
                scale: 3,
              },
              {
                bottom: 0,
                right: 0,
                opacity: 1,
                scale: 1,
                ease: "Bounce.easeOut",
              }
            );
          },
          retry: function () {
            this.packStatus = false;
            var tl = new TimelineMax();
            tl.to(".weapon-card-container", 0.4, {
              display: "none",
              scaleX: 0,
              scaleY: 0,
              ease: Back.easeInOut,
            });
          },
        },

        mounted: function () {
          // var tl = new TimelineMax();
          // tl.fromTo(
          //   ".glow",
          //   1,
          //   {
          //     opacity: 0,
          //   },
          //   {
          //     opacity: 1,
          //     repeat: -1,
          //     yoyo: true,
          //   }
          // );
        },
      });
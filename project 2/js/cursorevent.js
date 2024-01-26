AFRAME.registerComponent("cursor-listener", {
    schema: {
        selecteditemid: { default: "", type: "string" }
    },
    init: function () {
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()

    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesListState()
        })
    },

    handlePlacesListState: function () {
        const id = this.el.getAttribute("id")

        const placesid = ["taj_mahal", "new_york", "eiffel_tower", "budapest"]
        if (placesid.includes(id)) {
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener", { selecteditemid: id })
            this.el.setAttribute("material", { color: "#FF0000", opacity: 1 })
        }

    },
    handleMouseLeaveEvents:function() {
        this.el.addEventListener("mouseleave",() => {
            const{selecteditemid} = this.data
            if(selecteditemid){
                const el = document.querySelector(`#${selecteditemid}`) 
                const id = el.getAttribute("id")
                if(id == selecteditemid){
                    el.setAttribute("material",{color:"#00bcd4",opacity:0.4})
                }
            }
        })

    }



})
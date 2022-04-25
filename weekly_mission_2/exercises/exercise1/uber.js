const uberProfile = {
    name: "Manuel Macias",
    stars: 4.78,
    profileImg: {
		title: 'Mi Foto de Perfil ',
		srcimage: '/user/manuel/profile.jpg'
	},
    typeaccount: "User",
    tel: "+521234567890",
    email: "maanee1504@gmail.com",
    password: "*******",
    location: {
        street: "Lopez Mateos",
        city: "Guadalajara",
        state: "Jalisco"
    },
    paymentMethods: {
        cash:true,
        creditcard:{
            number: 5252525252525252,
            expiry: "2023-01-01",
            cvv: 100
        }
    },

    getName: function (){
        return this.name
    },

    getStars: function (){
        return this.stars
    },

    getProfileImage: function (){
        return this.profileImg.srcimage
    },

    getLocation: function (){
        return this.location
    },

    getPaymentMethods: function (){
        return this.paymentMethods
    },

    setProfileImage: function (newtitle, newsrcimg){
        this.profileImg.title=newtitle
        this.profileImg.srcimage=newsrcimg
    },

    setLocation: function (street, city, state){
        this.location.street=street
        this.location.city=city
        this.location.state=state
        return true
    },

    setPaymentMethods: function (ccnumber, ccexpiry, cccvv){
        this.paymentMethods.creditcard.number=ccnumber
        this.paymentMethods.creditcard.expiry=ccexpiry
        this.paymentMethods.creditcard.cvv=cccvv
    },

}

console.log("\nUber Profile: ")
console.log(uberProfile)
uberProfile.setLocation("Patria 111","Zapopan","Jalisco");
uberProfile.setPaymentMethods(411111111111,"2022-12-01",123);
console.log(uberProfile.getLocation())
console.log(uberProfile.getPaymentMethods())

const travel = {
    destination:{
        street: "Patria 111",
        city: "Zapopan",
        state: "Jalisco"
    },
    location:{
        street: "Lopez Mateos",
        city: "Guadalajara",
        state: "Jalisco"
    },
    type: "Black SUV",
    price: 206.39,
    paymentMethod: {
        creditcard:{
            number: 5252525252525252,
            expiry: "2023-01-01",
            cvv: 100
        }
    },
    driverinfo: {
        car:{
            color:"red",
            brand:"VW Vento",
            plate:"AAA 123-123"
        },
        driver:{
            name:"Hector",
            stars:4.7
        }
    },

    getDestination: function() {
        return this.destination
    },

    getLocation: function() {
        return this.location
    },

    getType: function() {
        return this.type
    },

    getPrice: function() {
        return this.price
    },

    getPaymentMethod: function() {
        return this.paymentMethod
    },

    getDriverInfo: function() {
        return this.driverinfo
    },

    setDestination: function (street, city, state){
        this.destination.street=street
        this.destination.city=city
        this.destination.state=state
        return true
    },

    setLocation: function (street, city, state){
        this.location.street=street
        this.location.city=city
        this.location.state=state
        return true
    },

}
console.log("\n-------------------------------\n\nTravel: ")
console.log(travel)
console.log(travel.getDriverInfo())
travel.setDestination("MiCasa 1","Centro","Nayarit")
console.log(travel.getDestination())
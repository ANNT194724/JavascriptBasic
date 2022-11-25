function translate(code) {
    switch (code) {
        case "VN":
            console.log("Xin chào");
            break;
        case "US":
        case "EN":
            console.log("Hello");
            break;
        case "JP":
            console.log("こにちは");
            break;
        case "FR":
            console.log("Bonjour");
            break;
        case "CN":
            console.log("你好");
            break;
        case "SP":
            console.log("Hola");
            break;
        default:
            console.log("Unknown languge")
            break;
    }
}

translate("JP");
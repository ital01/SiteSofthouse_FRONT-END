const formatPhoneNumber = (input) => {
    const phoneNumber = input.value.replace(/\D/g, "");
    const formattedPhoneNumber = [
      phoneNumber.substring(0, 2),
      phoneNumber.substring(2, 7) ? ` ${phoneNumber.substring(2, 7)}` : "",
      phoneNumber.substring(7, 13) ? `-${phoneNumber.substring(7, 13)}` : ""
    ].join("");
  
    input.value = formattedPhoneNumber;
  };
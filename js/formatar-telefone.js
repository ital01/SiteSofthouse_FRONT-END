const formatPhoneNumber = (input) => {
    const phoneNumber = input.value.replace(/\D/g, "");
    const formattedPhoneNumber = [
      phoneNumber.substring(0, 2),
      phoneNumber.substring(2, 8) ? ` ${phoneNumber.substring(2, 8)}` : "",
      phoneNumber.substring(8, 13) ? `-${phoneNumber.substring(8, 13)}` : ""
    ].join("");
  
    input.value = formattedPhoneNumber;
  };
import React from "react";

function DateTimeDisplay() {
  const date = new Date();
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const formattedTime = date.toLocaleTimeString("pt-BR", {
    hour12: false
  });

  return (
    <section className="dateTimeSection">
      <h1 className="HoraData">
        {formattedTime} ⋅ {formattedDate}
      </h1>
    </section>
  );
}

export default DateTimeDisplay;

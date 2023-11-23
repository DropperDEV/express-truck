export default function FooterAbout() {
  return (
    <div className=" mx-auto grid w-full grid-cols-1 gap-8 bg-blue-1100 py-6  sm:grid-cols-3 sm:gap-0">
      <ul className="  flex flex-col gap-3 text-center text-base uppercase">
        <h2 className=" font-bold">Onde atuamos</h2>
        <li>
          <ul>
            {" "}
            <li>RS|BR</li>
            <li>MG|BR</li>
            <li>SC|BR</li>
            <li>SP|BR</li>
            <li>RJ|BR</li>
            <li>CE|BR</li>
            <li>GO|BR</li>
          </ul>
        </li>
      </ul>
      <div className=" flex flex-col  gap-3 text-center text-sm sm:text-base">
        <h2 className="font-bold  uppercase">quem somos</h2>
        <p className=" mx-2">
          Fundada em 2022, a Express Truck tem como missão revolucionária o
          transporte de itens e mercadorias em todo o território nacional. Nosso
          compromisso com a excelência e a eficiência nos diferencia, e nos
          orgulhamos de ser reconhecidos como a principal referência em
          logística de alta capacidade e velocidade no mercado.{" "}
        </p>
      </div>
      <div className=" flex flex-col gap-5 text-center text-base">
        <h2 className="font-bold uppercase">fale conosco</h2>
        <div className=" flex flex-col items-center justify-center gap-5">
          {" "}
          <div className="flex flex-row gap-2">
            <span>
              <img src="instagram.jpg" alt="" />
            </span>
            <p>@ExpressTruck</p>
          </div>
          <div className="ml-2 flex flex-row gap-2">
            <span>
              <img src="whatssap.jpg" alt="" />
            </span>
            <p> (85) 8800 3344</p>
          </div>
          <div className="ml-2 flex flex-row gap-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.375 3.75H5.625C5.12772 3.75 4.65081 3.94754 4.29917 4.29917C3.94754 4.65081 3.75 5.12772 3.75 5.625V24.375C3.75 24.8723 3.94754 25.3492 4.29917 25.7008C4.65081 26.0525 5.12772 26.25 5.625 26.25H24.375C24.8723 26.25 25.3492 26.0525 25.7008 25.7008C26.0525 25.3492 26.25 24.8723 26.25 24.375V5.625C26.25 5.12772 26.0525 4.65081 25.7008 4.29917C25.3492 3.94754 24.8723 3.75 24.375 3.75ZM21.2883 19.9617C21.3754 20.0488 21.4445 20.1522 21.4916 20.266C21.5388 20.3798 21.563 20.5018 21.563 20.625C21.563 20.7482 21.5388 20.8702 21.4916 20.984C21.4445 21.0978 21.3754 21.2012 21.2883 21.2883C21.2012 21.3754 21.0978 21.4445 20.984 21.4916C20.8702 21.5388 20.7482 21.563 20.625 21.563C20.5018 21.563 20.3798 21.5388 20.266 21.4916C20.1522 21.4445 20.0488 21.3754 19.9617 21.2883L15 16.3254L10.0383 21.2883C9.86237 21.4642 9.62378 21.563 9.375 21.563C9.12622 21.563 8.88763 21.4642 8.71172 21.2883C8.53581 21.1124 8.43698 20.8738 8.43698 20.625C8.43698 20.3762 8.53581 20.1376 8.71172 19.9617L13.6746 15L8.71172 10.0383C8.53581 9.86237 8.43698 9.62378 8.43698 9.375C8.43698 9.12622 8.53581 8.88763 8.71172 8.71172C8.88763 8.53581 9.12622 8.43698 9.375 8.43698C9.62378 8.43698 9.86237 8.53581 10.0383 8.71172L15 13.6746L19.9617 8.71172C20.1376 8.53581 20.3762 8.43698 20.625 8.43698C20.8738 8.43698 21.1124 8.53581 21.2883 8.71172C21.4642 8.88763 21.563 9.12622 21.563 9.375C21.563 9.62378 21.4642 9.86237 21.2883 10.0383L16.3254 15L21.2883 19.9617Z"
                  fill="white"
                />
              </svg>
            </span>
            <p>ExpressTruckBR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

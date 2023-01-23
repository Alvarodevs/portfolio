import React, { useEffect, useRef } from "react";
import { SiRedux, SiFlask } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import ReactRouterLogo from "../assets/img/react-router-mark-color.svg";
import GmapsLogo from "../assets/img/maps-icon.svg";

const Stack = ({ stack }) => {
   return (
      <>
         <div className="stack__container">
            {stack.map((category) => {
               let divClass = "";
               if (category.type === "FrontEnd") {
                  divClass = "stack__frontend";
               } else if (category.type === "BackEnd") {
                  divClass = "stack__backend";
               } else {
                  divClass = "stack__devops";
               }
               return (
                  <div key={divClass} className={divClass}>
                     <p>{category.type}</p>
                     {category.tech.map((technology, index) => {
                        {
                           return (
                              <div
                                 className="stack__row"
                                 key={`techology_${index}`}
                              >
                                 {technology[0]}
                                 <span>{technology[1]}</span>
                              </div>
                           );
                        }
                     })}
                  </div>
               );
            })}
         </div>
         <div className="stack__other-tecnologies">
            <div className="stack__row stack__row-2">
               <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="redux-logo"
               >
                  <SiRedux />
               </a>
               <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="sass-logo-link"
               >
                  <FaSass className="sass-logo" />
               </a>
               <a
                  href="https://reactrouter.com/en/main"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     src={ReactRouterLogo}
                     className="react-router-logo"
                     alt="React Router"
                  />
               </a>
               <a
                  href="https://developers.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     src={GmapsLogo}
                     className="gmaps-logo"
                     alt="Google maps marker"
                  />
               </a>
               <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bootstrap-logo"
               >
                  <svg
                     xmlns=""
                     width="40"
                     height="32"
                     viewBox="0 0 118 94"
                     role="img"
                  >
                     <title>Bootstrap</title>
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                        fill="#712cf9"
                     ></path>
                  </svg>
               </a>
               <a
                  href="https://getbem.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bem-logo"
               >
                  <svg
                     viewBox="0 0 101.7 84"
                     width="32"
                     height="32"
                     fill="#FFFFFF"
                     astro-icon="b_"
                  >
                     <path d="M0 13h23.8v7H0zM0 0h23.8v7H0zm42.7 25.9H0v7h41.1c4.5 0 15 .1 18.9 6.4v-3.9c-1.9-6.2-7.5-9.5-17.3-9.5zm.1 13H0v7h41.1c10 0 16.3.4 18.9 1.8v-3.1c-2-4.9-10.4-5.7-17.2-5.7zm-.1 33H0v-7h41.1c4.5 0 15-.1 18.9-6.4v3.9c-1.9 6.2-7.5 9.5-17.3 9.5zm.1-13H0v-7h41.1c10 0 16.3-.4 18.9-1.8v3.1c-2 4.9-10.4 5.7-17.2 5.7zM70.4 84h31.4v-4.3H71.3c-2.7 0-9.1-.1-11.4-3.8v2.4C61 82 64.4 84 70.4 84zm-.1-7.9h31.4v-4.3H71.3c-6.1 0-9.9-.2-11.4-1.1v1.9c1.2 3 6.3 3.5 10.4 3.5z"></path>
                  </svg>
               </a>
               <a
                  href="https://styled-components.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="styled-components-logo"
               >
                  <svg>
                     <path
                        d="M39.4843 64.75C39.5762 64.5422 39.8081 64.3978 39.9765 64.2228C42.5468 61.5278 45.139 58.8569 47.6743 56.1291C48.4677 55.3963 49.0807 54.49 49.4655 53.4809C49.8503 52.4718 49.9965 51.3874 49.8924 50.3125C49.8128 49.8522 49.7084 49.3965 49.5796 48.9475C48.8884 49.6037 48.2453 50.2009 47.5978 50.8025C46.5915 51.7387 45.5896 52.6794 44.5746 53.6047C43.9761 54.2149 43.2066 54.6292 42.3676 54.7929C41.5287 54.9565 40.6599 54.8618 39.8759 54.5212C39.0823 54.2297 38.3918 53.7115 37.8901 53.0309C37.3884 52.3504 37.0977 51.5375 37.054 50.6931C37.0305 50.5845 36.9991 50.4778 36.9599 50.3737C36.1878 51.03 35.4484 51.6337 34.7156 52.255L19.484 65.1612C19.379 65.2509 19.2653 65.3625 19.1668 65.45H39.4734L39.4428 65.4303C39.3334 65.3537 39.3903 64.9512 39.4843 64.75V64.75ZM18.2371 64.75C18.4178 64.5148 18.6358 64.3108 18.8824 64.1462L39.9612 46.2634C41.3991 45.0428 42.8305 43.8156 44.2553 42.5819C44.4313 42.4591 44.5693 42.2893 44.6534 42.0919C44.9942 40.6068 45.0425 39.0695 44.7956 37.5659C44.5768 37.7191 44.4587 37.7847 44.3581 37.8919C42.6321 39.4362 40.9149 40.9937 39.1803 42.5294C38.6056 43.1077 37.8624 43.489 37.0574 43.6183C36.2524 43.7476 35.4271 43.6183 34.7003 43.2491C33.9587 42.899 33.338 42.3362 32.9173 41.6323C32.4966 40.9283 32.2949 40.1152 32.3378 39.2962V38.5875C32.0206 38.8194 31.7887 38.9747 31.5721 39.1497C23.1357 45.9047 14.7007 52.6546 6.26713 59.3994C5.8865 59.7034 5.4315 60.3816 4.93275 59.7231C4.434 59.0647 5.19307 58.7934 5.57588 58.4872C14.5665 51.2728 23.5615 44.065 32.5609 36.8637C34.0265 35.6891 34.1228 35.1969 33.169 33.3309L32.6003 33.8647C31.0406 35.315 29.4634 36.7456 27.9278 38.22C27.2978 38.8276 26.5089 39.2446 25.6521 39.423C24.7953 39.6013 23.9054 39.5337 23.0854 39.2278C22.2654 38.922 21.5486 38.3905 21.0178 37.6946C20.487 36.9988 20.1638 36.167 20.0856 35.2953C19.7946 35.5141 19.5431 35.6737 19.3046 35.8597L5.96088 46.2022C5.73074 46.4279 5.46828 46.6181 5.18213 46.7666C4.96616 46.8318 4.73425 46.8202 4.52588 46.7337V65.4609H18.2109C18.16 65.3485 18.1359 65.2257 18.1404 65.1024C18.145 64.979 18.1781 64.8584 18.2371 64.75V64.75Z"
                        fill="#FFCEBF"
                     ></path>
                     <path
                        d="M55.206 5.30031C54.8341 6.51875 54.4732 7.73937 54.1472 8.97094C53.8462 9.84125 53.8812 10.7927 54.2454 11.6385C54.6096 12.4843 55.2768 13.1635 56.116 13.5428C58.6828 14.8921 61.5753 15.4981 64.4679 15.2928V5.50812C64.4357 5.2936 64.4476 5.07477 64.5028 4.865C64.5641 4.74634 64.6414 4.63667 64.7325 4.53906H55.1972C55.3438 4.70969 55.2935 5.00938 55.206 5.30031V5.30031Z"
                        fill="#FF6196"
                     ></path>
                     <path
                        d="M36.0544 26.3201C36.009 27.4122 35.627 28.4636 34.9606 29.3301C32.5785 32.4051 29.8428 35.1893 26.81 37.6251C26.3209 38.0778 25.701 38.364 25.0392 38.4426C24.3775 38.5212 23.7078 38.3881 23.1263 38.0626C22.5475 37.8153 22.0594 37.3948 21.7292 36.859C21.3991 36.3232 21.2429 35.6982 21.2822 35.0701C21.3523 34.2985 21.6726 33.5711 22.1944 32.9985C25.5857 29.7647 29.2601 26.8415 33.1734 24.2638C33.4297 24.0628 33.7427 23.9475 34.0682 23.9342C34.3936 23.9208 34.715 24.0101 34.9869 24.1894C35.3442 24.4113 35.6332 24.7279 35.8216 25.104C36.01 25.48 36.0906 25.901 36.0544 26.3201V26.3201ZM33.4338 39.5785C33.383 39.095 33.4451 38.6062 33.6151 38.1508C33.7852 37.6953 34.0585 37.2854 34.4138 36.9535C37.7344 33.8908 41.297 31.1014 45.0669 28.6126C45.1806 28.5404 45.2856 28.4682 45.4103 28.3938C45.7396 28.1561 46.1386 28.0346 46.5445 28.0484C46.9504 28.0623 47.3402 28.2107 47.6525 28.4704C47.9547 28.7263 48.1685 29.0711 48.2635 29.4555C48.3586 29.84 48.33 30.2446 48.1819 30.6119C47.7049 32.2005 46.8247 33.6384 45.6269 34.7857C43.1942 37.1822 40.7146 39.5306 38.1894 41.8294C37.8091 42.2205 37.3095 42.474 36.7694 42.55C36.2292 42.6261 35.6791 42.5203 35.2056 42.2494C34.7081 41.9909 34.2845 41.6101 33.9745 41.1429C33.6646 40.6757 33.4785 40.1374 33.4338 39.5785V39.5785ZM49.2188 41.0244C48.6063 41.6807 47.9763 42.3063 47.3878 42.9779C47.2109 43.2374 47.0641 43.5163 46.9503 43.8091C47.2741 43.9054 47.6525 44.1591 47.915 44.0694C49.2516 43.621 50.5553 43.0829 52.0231 42.5163C51.7038 43.2513 51.4631 43.9294 51.1241 44.5507C49.7272 46.8982 47.978 49.0171 45.9375 50.8332C45.1617 51.5813 44.3559 52.2966 43.5203 52.9791C43.0778 53.3464 42.5457 53.5894 41.9784 53.6835C41.4111 53.7776 40.829 53.7193 40.2916 53.5146C39.7542 53.3099 39.2809 52.9661 38.9199 52.5184C38.559 52.0707 38.3235 51.5352 38.2375 50.9666C38.2024 50.6505 38.2304 50.3305 38.3198 50.0253C38.4091 49.72 38.5581 49.4355 38.7581 49.1882C41.7349 45.9556 45.137 43.1423 48.8709 40.8254C48.9163 40.8078 48.9645 40.7981 49.0131 40.7969L49.2188 41.0244Z"
                        fill="#FF87AF"
                     ></path>
                     <path
                        d="M54.2369 32.3115L57.9797 15.6865L60.6047 16.3012L59.2506 20.4159C57.9862 24.244 56.7066 28.0721 55.4728 31.9046C55.2322 32.6134 54.9172 32.7446 54.2369 32.3115V32.3115ZM50.0106 42.0896C50.4066 40.5781 50.8003 39.1803 51.1328 37.7671C51.4569 36.3967 52.0732 35.1125 52.9397 34.0025C53.4712 33.3046 54.0684 33.5825 54.6787 33.7334C55.2431 33.8712 55.3853 34.2846 55.4094 34.8271C55.4984 36.3274 55.0415 37.8091 54.1231 38.9987C53.0298 40.3541 51.6166 41.4163 50.0106 42.0896V42.0896Z"
                        fill="#FF6196"
                     ></path>
                     <path
                        d="M65.6097 6.33058C65.6423 5.84339 65.6299 5.35423 65.5725 4.86933C65.5274 4.73388 65.438 4.61755 65.3188 4.53902C65.2217 4.46006 65.108 4.40398 64.9863 4.37495C64.9163 4.36183 64.8178 4.43402 64.7238 4.53683C64.6326 4.63443 64.5553 4.74411 64.4941 4.86277C64.4388 5.07254 64.4269 5.29136 64.4591 5.50589V15.2884C61.5665 15.4937 58.674 14.8876 56.1072 13.5384C55.268 13.1591 54.6009 12.4799 54.2366 11.6341C53.8724 10.7882 53.8374 9.83683 54.1384 8.96652C54.4644 7.73495 54.8253 6.51433 55.1972 5.29589C55.2847 5.00495 55.335 4.70527 55.1972 4.53464C55.1205 4.45158 55.0147 4.40141 54.9019 4.39464C54.7574 4.3962 54.6174 4.44541 54.5038 4.53464C54.3402 4.63249 54.2098 4.77731 54.1297 4.95027C53.6922 6.26277 53.3072 7.58839 52.9725 8.92714C52.8462 9.4547 52.8121 10.0002 52.8719 10.5393C52.9565 11.5149 53.3193 12.4457 53.9173 13.2212C54.5152 13.9967 55.3231 14.5843 56.245 14.9143C56.6584 15.0871 56.9013 15.2578 56.7853 15.8025C56.6256 16.4937 56.4703 17.185 56.3128 17.8784C55.2409 22.5771 54.1749 27.2781 53.1147 31.9812C53.0848 32.1909 52.9926 32.3868 52.85 32.5434C52.1512 33.0988 51.5641 33.7817 51.1197 34.5559C50.5534 35.5775 50.1616 36.6865 49.9603 37.8371C49.9217 38.2042 49.7891 38.555 49.5752 38.8558C49.3614 39.1566 49.0736 39.3972 48.7397 39.5543C47.8275 40.0159 46.9897 40.6131 45.9769 41.2343C46.0444 40.0164 46.0313 38.7953 45.9375 37.579C45.8604 37.2049 45.8768 36.8175 45.9852 36.4512C46.0935 36.0849 46.2905 35.751 46.5588 35.479C47.8929 34.1573 48.8439 32.4987 49.3106 30.6796C49.45 30.258 49.4883 29.8094 49.4222 29.3702C49.3562 28.931 49.1877 28.5136 48.9305 28.1515C48.6732 27.7895 48.3344 27.4931 47.9414 27.2863C47.5484 27.0794 47.1122 26.968 46.6681 26.9609C45.9492 26.9529 45.2433 27.1535 44.6359 27.5384C42.5486 28.9638 40.4976 30.4415 38.4847 31.9703C37.2881 32.8715 36.1616 33.869 35.0022 34.814C34.9522 34.7603 34.9089 34.7009 34.8731 34.6368C34.851 34.4758 34.8076 34.3184 34.7441 34.1687C33.775 32.6725 34.4466 31.5853 35.4988 30.4675C36.5949 29.3184 37.2006 27.7877 37.1875 26.1996C37.2215 25.3905 36.9681 24.5955 36.4722 23.9553C36.208 23.6303 35.8825 23.3605 35.5141 23.1612C34.9908 22.8748 34.3925 22.7553 33.7993 22.8186C33.2062 22.882 32.6466 23.1251 32.1956 23.5156L31.5853 23.9531C30.1919 24.9506 28.7809 25.9218 27.44 26.9893C25.4824 28.5522 23.5669 30.1672 21.6956 31.8325C20.8206 32.6046 20.1819 33.659 19.2741 34.3765C14.5403 38.115 9.75626 41.7856 4.9897 45.4803C4.8258 45.578 4.67509 45.6964 4.54126 45.8325C4.52748 45.8524 4.51575 45.8736 4.50626 45.8959C4.40563 46.13 4.32032 46.5171 4.43845 46.6593C4.4674 46.6902 4.5024 46.7148 4.54126 46.7315C4.74963 46.818 4.98154 46.8296 5.19751 46.7643C5.48366 46.6159 5.74612 46.4257 5.97626 46.2L19.32 35.8575C19.5584 35.6715 19.81 35.5031 20.1009 35.2931C20.1792 36.1648 20.5023 36.9966 21.0332 37.6924C21.564 38.3883 22.2808 38.9198 23.1008 39.2256C23.9208 39.5314 24.8106 39.5991 25.6675 39.4207C26.5243 39.2424 27.3132 38.8254 27.9431 38.2178C29.4744 36.7434 31.0559 35.3128 32.6156 33.8625L33.1844 33.3287C34.1381 35.1946 34.0419 35.6868 32.5763 36.8615C23.5696 44.0686 14.5695 51.2771 5.57595 58.4871C5.19313 58.7934 4.43626 59.0712 4.93282 59.7231C5.42938 60.375 5.88657 59.7034 6.2672 59.3993C14.7051 52.6604 23.1372 45.9127 31.5634 39.1562C31.7822 38.9812 32.0119 38.8259 32.3291 38.594V39.3028C32.2862 40.1217 32.4879 40.9349 32.9087 41.6388C33.3294 42.3427 33.95 42.9055 34.6916 43.2556C35.4185 43.6249 36.2437 43.7541 37.0487 43.6248C37.8537 43.4955 38.5969 43.1143 39.1716 42.5359C40.9063 41.0046 42.6234 39.4428 44.3494 37.8984C44.4588 37.8 44.5856 37.7256 44.7869 37.5725C45.0338 39.076 44.9855 40.6133 44.6447 42.0984C44.5606 42.2958 44.4226 42.4656 44.2466 42.5884C42.8203 43.8207 41.389 45.0479 39.9525 46.27L18.8825 64.155C18.6358 64.3195 18.4178 64.5235 18.2372 64.7587C18.1796 64.866 18.1472 64.985 18.1427 65.1068C18.1381 65.2285 18.1615 65.3496 18.2109 65.4609C18.3098 65.5349 18.424 65.5858 18.5452 65.6096C18.6664 65.6335 18.7914 65.6298 18.9109 65.5987C19.0053 65.5713 19.0921 65.5227 19.1647 65.4565C19.2741 65.369 19.3834 65.2575 19.4819 65.1678L34.7134 52.2615C35.4463 51.6403 36.1856 51.0278 36.9578 50.3803C36.9969 50.4843 37.0284 50.591 37.0519 50.6996C37.0956 51.544 37.3863 52.3569 37.888 53.0374C38.3896 53.718 39.0801 54.2362 39.8738 54.5278C40.6577 54.8683 41.5266 54.963 42.3655 54.7994C43.2045 54.6358 43.974 54.2214 44.5725 53.6112C45.5875 52.6859 46.5894 51.7453 47.5956 50.809C48.2519 50.2075 48.8863 49.6037 49.5775 48.954C49.7063 49.403 49.8107 49.8587 49.8903 50.319C49.9909 51.3904 49.8431 52.4706 49.4584 53.4755C49.0737 54.4805 48.4624 55.3833 47.6722 56.1137C45.1369 58.8437 42.5447 61.5146 39.9744 64.2075C39.8059 64.3825 39.5741 64.5268 39.4822 64.7346C39.3903 64.9425 39.3313 65.3493 39.4406 65.4368L39.4713 65.4565C39.7006 65.5681 39.9586 65.607 40.2106 65.5681C40.2813 65.5536 40.3442 65.5139 40.3878 65.4565C40.4491 65.3931 40.5081 65.3143 40.5672 65.2553C42.6497 63.1028 44.7431 60.9612 46.8103 58.7934C47.6447 57.948 48.4292 57.0547 49.1597 56.1181C50.1123 55.0635 50.7439 53.7589 50.9803 52.3576C51.2167 50.9564 51.048 49.5167 50.4941 48.2081C50.4345 47.9163 50.4927 47.6128 50.6559 47.3637C50.7981 47.1187 50.9556 46.8803 51.1175 46.644C51.6355 45.9715 52.0669 45.2366 52.4016 44.4565C53.0484 42.542 54.0412 40.7625 55.3306 39.2065C55.9234 38.455 56.3313 37.5746 56.5213 36.6364C56.7112 35.6982 56.6781 34.7286 56.4244 33.8056C56.3348 33.4546 56.3348 33.0868 56.4244 32.7359C57.5313 29.3081 58.6709 25.8912 59.7997 22.4721L61.3091 17.8915L61.775 16.4762C62.7681 16.4762 63.7044 16.4565 64.6363 16.4762C65.4106 16.4981 65.6469 16.135 65.6381 15.3825C65.5922 12.3637 65.6097 9.34714 65.6097 6.33058V6.33058ZM26.81 37.625C26.3209 38.0777 25.701 38.3639 25.0392 38.4425C24.3774 38.5211 23.7078 38.388 23.1263 38.0625C22.5475 37.8152 22.0594 37.3947 21.7292 36.8589C21.3991 36.3231 21.2429 35.6981 21.2822 35.07C21.3523 34.2984 21.6726 33.571 22.1944 32.9984C25.5857 29.7646 29.2601 26.8414 33.1734 24.2637C33.387 24.1127 33.63 24.0084 33.8866 23.9575C34.0587 23.9257 34.2351 23.9257 34.4072 23.9575C34.6133 23.9976 34.81 24.0763 34.9869 24.1893C35.3446 24.4114 35.6337 24.7283 35.8222 25.1048C36.0106 25.4813 36.091 25.9027 36.0544 26.3221C36.009 27.4143 35.627 28.4657 34.9606 29.3321C32.5783 32.4065 29.8427 35.1899 26.81 37.625V37.625ZM38.185 41.8446C37.8047 42.2357 37.3052 42.4892 36.765 42.5653C36.2248 42.6413 35.6747 42.5355 35.2013 42.2646C34.7028 42.0055 34.2786 41.6238 33.9686 41.1553C33.6586 40.6869 33.4731 40.1472 33.4294 39.5871C33.3786 39.1036 33.4407 38.6149 33.6107 38.1594C33.7808 37.7039 34.0542 37.2941 34.4094 36.9621C37.73 33.8994 41.2926 31.11 45.0625 28.6212C45.1763 28.549 45.2813 28.4768 45.4059 28.4025C45.7352 28.1647 46.1342 28.0432 46.5401 28.0571C46.946 28.071 47.3358 28.2194 47.6481 28.479C47.9503 28.735 48.1641 29.0797 48.2592 29.4642C48.3542 29.8486 48.3256 30.2533 48.1775 30.6206C47.7006 32.2091 46.8203 33.6471 45.6225 34.7943C43.2097 37.205 40.7006 39.5259 38.1894 41.8359L38.185 41.8446ZM51.1153 44.5593C49.7204 46.9031 47.9742 49.019 45.9375 50.8331C45.1617 51.5812 44.3559 52.2965 43.5203 52.979C43.0778 53.3462 42.5457 53.5893 41.9784 53.6834C41.4111 53.7775 40.829 53.7192 40.2916 53.5145C39.7542 53.3098 39.2809 52.966 38.9199 52.5183C38.559 52.0706 38.3235 51.5351 38.2375 50.9665C38.2024 50.6504 38.2304 50.3304 38.3198 50.0252C38.4091 49.7199 38.5581 49.4354 38.7581 49.1881C41.7349 45.9555 45.137 43.1422 48.8709 40.8253C48.9163 40.8077 48.9645 40.798 49.0131 40.7968L49.2319 41.0156C48.6194 41.6718 47.9894 42.2975 47.4009 42.969C47.224 43.2286 47.0772 43.5075 46.9634 43.8003C47.2872 43.8965 47.6656 44.1503 47.9281 44.0606C48.9847 43.7062 50.0238 43.295 51.1372 42.8575L52.0363 42.5075C51.6994 43.2512 51.4588 43.9293 51.1197 44.5506L51.1153 44.5593ZM54.1188 39.014C53.3028 40.0528 52.2801 40.9109 51.1153 41.534C50.7551 41.7353 50.3854 41.9234 50.0063 42.0984C50.3956 40.6087 50.785 39.2284 51.1153 37.8328L51.1284 37.7759C51.4525 36.4055 52.0689 35.1213 52.9353 34.0112C53.4669 33.3134 54.0641 33.5912 54.6744 33.7421C55.2388 33.88 55.3809 34.2934 55.405 34.8359C55.4947 36.3348 55.0394 37.8156 54.1231 39.0053L54.1188 39.014ZM59.2375 20.4203C57.9731 24.2484 56.6934 28.0765 55.4597 31.909C55.2278 32.6287 54.9128 32.76 54.2325 32.3268L57.4766 17.9046L57.9753 15.6909L60.6003 16.3056L60.0731 17.9046L59.2375 20.4203Z"
                        fill="#000000"
                     ></path>
                  </svg>
               </a>
               <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="flask-logo"
               >
                  <SiFlask />
               </a>
            </div>
         </div>
      </>
   );
};
export default Stack;

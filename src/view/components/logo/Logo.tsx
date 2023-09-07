type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 106 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2793 7.58594H10.228C8.03891 7.58594 6.66602 9.13611 6.66602 11.3306V17.2513C6.66602 19.4458 8.03134 20.9959 10.228 20.9959H19.2782C21.4759 20.9959 22.8423 19.4458 22.8423 17.2513V11.3306C22.8423 9.13611 21.4759 7.58594 19.2793 7.58594Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.2139 12.0483H19.289" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.927 7.58365L17.3412 4.94056C16.205 3.06933 14.2397 2.43801 12.3534 3.57524L4.60463 8.23874C2.72582 9.36733 2.34747 11.4029 3.47605 13.2893L6.53748 18.3549C6.68018 18.6003 6.83802 18.8208 7.01855 19.0186V19.0262" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M34.8034 8.95513H39.9958V18.5H38.335V10.5587H34.8034V18.5H33.1426V10.5587H31.6154V8.95513H33.1426V8.66878C33.1426 6.14893 34.5361 4.88901 37.3232 4.88901C37.8832 4.88901 38.5386 4.97173 39.2895 5.13718V6.64527C38.4495 6.54345 37.7941 6.49255 37.3232 6.49255C36.4451 6.49255 35.8024 6.65799 35.3952 6.98888C35.0006 7.31977 34.8034 7.87974 34.8034 8.66878V8.95513ZM47.2933 8.70696C48.4132 8.70696 49.3104 9.0633 49.9849 9.77598C50.6594 10.4759 50.9967 11.4304 50.9967 12.6394V18.5H49.3359V12.7349C49.3359 11.9713 49.1259 11.3732 48.7059 10.9405C48.286 10.5078 47.7069 10.2914 46.9688 10.2914C46.1161 10.2914 45.4416 10.5587 44.9452 11.0932C44.4489 11.615 44.2007 12.3976 44.2007 13.4412V18.5H42.5399V8.95513H44.2007V10.3296C44.8625 9.24783 45.8934 8.70696 47.2933 8.70696ZM57.8013 18.7482C56.3632 18.7482 55.1669 18.2709 54.2124 17.3164C53.2579 16.3492 52.7807 15.1529 52.7807 13.7276C52.7807 12.3022 53.2579 11.1123 54.2124 10.1578C55.1669 9.19057 56.3632 8.70696 57.8013 8.70696C58.7431 8.70696 59.5894 8.93604 60.3402 9.39419C61.0911 9.83962 61.6511 10.4441 62.0201 11.2077L60.6266 12.0095C60.3848 11.5004 60.0093 11.0932 59.5003 10.7877C59.004 10.4823 58.4376 10.3296 57.8013 10.3296C56.8468 10.3296 56.045 10.6541 55.396 11.3032C54.7597 11.9649 54.4415 12.7731 54.4415 13.7276C54.4415 14.6693 54.7597 15.4711 55.396 16.1329C56.045 16.7819 56.8468 17.1064 57.8013 17.1064C58.4376 17.1064 59.0103 16.9601 59.5194 16.6674C60.0284 16.3619 60.4166 15.9547 60.6838 15.4456L62.0965 16.2665C61.6765 17.0301 61.0847 17.6346 60.3211 18.08C59.5576 18.5255 58.7176 18.7482 57.8013 18.7482ZM68.4896 8.70696C69.6095 8.70696 70.5068 9.0633 71.1813 9.77598C71.8558 10.4759 72.193 11.4304 72.193 12.6394V18.5H70.5322V12.7349C70.5322 11.9713 70.3222 11.3732 69.9023 10.9405C69.4823 10.5078 68.9032 10.2914 68.1651 10.2914C67.3124 10.2914 66.6379 10.5587 66.1416 11.0932C65.6452 11.615 65.3971 12.3976 65.3971 13.4412V18.5H63.7363V5.13718H65.3971V10.3296C66.0589 9.24783 67.0897 8.70696 68.4896 8.70696ZM83.6746 14.4912H75.676C75.8415 15.3311 76.2296 15.9929 76.8405 16.4765C77.4514 16.9474 78.2149 17.1828 79.1313 17.1828C80.3912 17.1828 81.3075 16.7183 81.8802 15.7893L83.2928 16.591C82.3511 18.0291 80.9511 18.7482 79.0931 18.7482C77.5914 18.7482 76.3569 18.2773 75.3897 17.3355C74.4479 16.3683 73.977 15.1657 73.977 13.7276C73.977 12.2767 74.4415 11.0805 75.3706 10.1387C76.2996 9.1842 77.5023 8.70696 78.9785 8.70696C80.3785 8.70696 81.5175 9.20329 82.3956 10.196C83.2865 11.1632 83.7319 12.3467 83.7319 13.7467C83.7319 13.9885 83.7128 14.2366 83.6746 14.4912ZM78.9785 10.2723C78.1004 10.2723 77.3623 10.5205 76.7641 11.0168C76.1787 11.5132 75.816 12.1877 75.676 13.0403H82.052C81.912 12.1622 81.562 11.4813 81.0021 10.9977C80.4421 10.5141 79.7676 10.2723 78.9785 10.2723ZM90.1085 18.7482C88.6704 18.7482 87.4741 18.2709 86.5196 17.3164C85.5651 16.3492 85.0879 15.1529 85.0879 13.7276C85.0879 12.3022 85.5651 11.1123 86.5196 10.1578C87.4741 9.19057 88.6704 8.70696 90.1085 8.70696C91.0502 8.70696 91.8965 8.93604 92.6474 9.39419C93.3983 9.83962 93.9582 10.4441 94.3273 11.2077L92.9337 12.0095C92.6919 11.5004 92.3165 11.0932 91.8074 10.7877C91.3111 10.4823 90.7448 10.3296 90.1085 10.3296C89.154 10.3296 88.3522 10.6541 87.7031 11.3032C87.0668 11.9649 86.7487 12.7731 86.7487 13.7276C86.7487 14.6693 87.0668 15.4711 87.7031 16.1329C88.3522 16.7819 89.154 17.1064 90.1085 17.1064C90.7448 17.1064 91.3175 16.9601 91.8265 16.6674C92.3356 16.3619 92.7238 15.9547 92.991 15.4456L94.4037 16.2665C93.9837 17.0301 93.3919 17.6346 92.6283 18.08C91.8647 18.5255 91.0248 18.7482 90.1085 18.7482ZM99.4032 13.5748L104.118 18.5H102.057L97.7042 13.9757V18.5H96.0434V5.13718H97.7042V13.174L101.828 8.95513H103.966L99.4032 13.5748Z" fill="currentColor" />
    </svg>
  )
}

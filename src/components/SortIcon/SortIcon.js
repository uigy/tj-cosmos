import React from "react";

const SortIcon = ({ sortDirection = 0 }) => {
  switch (sortDirection) {
    case -1:
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-down"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.3871 9.2097L4.29289 9.29289C3.93241 9.65338 3.90468 10.2206 4.2097 10.6129L4.29289 10.7071L7.29289 13.7071L7.33685 13.7485L7.40469 13.8037L7.51594 13.8753L7.62866 13.9288L7.73401 13.9642L7.8819 13.9931L8 14L8.07524 13.9972L8.20073 13.9798L8.31214 13.9503L8.42322 13.9063L8.52071 13.854L8.62545 13.7803L8.70711 13.7071L11.7071 10.7071C12.0976 10.3166 12.0976 9.68342 11.7071 9.29289C11.3466 8.93241 10.7794 8.90468 10.3871 9.2097L10.2929 9.29289L9 10.585V3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V10.585L5.70711 9.29289C5.34662 8.93241 4.77939 8.90468 4.3871 9.2097L4.29289 9.29289L4.3871 9.2097Z"
          />
        </svg>
      );
    case 1:
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-up"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.3871 6.7903L4.29289 6.70711C3.93241 6.34662 3.90468 5.77939 4.2097 5.3871L4.29289 5.29289L7.29289 2.29289L7.33685 2.2515L7.40469 2.19633L7.51594 2.12467L7.62866 2.07123L7.73401 2.03585L7.8819 2.00691L8 2L8.07524 2.00279L8.20073 2.02024L8.31214 2.04974L8.42322 2.09367L8.52071 2.146L8.62545 2.21969L8.70711 2.29289L11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711C11.3466 7.06759 10.7794 7.09532 10.3871 6.7903L10.2929 6.70711L9 5.415V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V5.415L5.70711 6.70711C5.34662 7.06759 4.77939 7.09532 4.3871 6.7903L4.29289 6.70711L4.3871 6.7903Z"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7907 9.61275L11.7075 9.70696L9.66563 11.7462L9.57206 11.8202L9.52752 11.8495L9.47199 11.8817L9.37345 11.9277L9.28557 11.9583L9.2047 11.9788L9.08533 11.9961L9.00002 11.9997L8.91509 11.9961L8.85106 11.9887L8.76863 11.9728L8.65475 11.9385L8.57684 11.906L8.46906 11.8474L8.42831 11.8203L8.37041 11.7743L8.29293 11.7068L6.2927 9.70696C5.90214 9.31645 5.90214 8.68331 6.2927 8.2928C6.65321 7.93233 7.22049 7.90461 7.61281 8.20962L7.70702 8.2928L7.99978 8.58531L8.00002 1.00031C8.00002 0.487469 8.38606 0.064798 8.8834 0.00703291L9.00018 0.000305176C9.55246 0.000305176 10.0002 0.44802 10.0002 1.00031L9.99978 8.58531L10.2932 8.2928C10.6537 7.93233 11.221 7.90461 11.6133 8.20962L11.7075 8.2928C12.038 8.62323 12.0888 9.12738 11.86 9.51126L11.7907 9.61275ZM2.37741 0.218305L2.42865 0.179294L2.50195 0.132654L2.62221 0.0738299L2.76897 0.0267751L2.8514 0.0108773L2.96741 0.000400099L3.08567 0.00347375L3.20504 0.0207905L3.31719 0.0510356L3.37379 0.0718762L3.47233 0.117879L3.5724 0.179331L3.62211 0.216467L3.70762 0.292751L5.70784 2.29261L5.79103 2.38681C6.07066 2.7464 6.07066 3.25298 5.79103 3.61256L5.70784 3.70676L5.61362 3.78995C5.25399 4.06954 4.74736 4.06954 4.38773 3.78995L4.29351 3.70676L4.00012 3.41426L4.00052 10.9993C4.00052 11.5121 3.61448 11.9348 3.11714 11.9925L3.00052 11.9993L2.88374 11.9925C2.42466 11.9392 2.06041 11.575 2.00709 11.1159L2.00036 10.9993L2.00012 3.41426L1.70736 3.70676L1.61315 3.78995C1.22083 4.09496 0.653551 4.06723 0.293038 3.70676C-0.067474 3.3463 -0.0952057 2.77909 0.209843 2.38681L0.293038 2.29261L2.29325 0.292751L2.37741 0.218305Z"
          />
        </svg>
      );
  }
};

export default SortIcon;

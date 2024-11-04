"use client";

import { kimJungChulMyungjo } from "@/app/font";
import { requestConsultation } from "../actions/request-consultation";
import styles from "./FormSection.module.css";
import { useState } from "react";

const FormSection = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1((prev) => !prev);
  };

  return (
    <div className={`${styles.section} ${kimJungChulMyungjo.className}`}>
      <div className={styles.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
            fill="#FFF6C3"
          />
        </svg>
        <div className={styles.text}>상담 신청</div>
      </div>
      <form
        action={async (formData: FormData) => {
          if (!isChecked1) {
            alert("약관에 동의해주세요.");
            return;
          }
          const result = await requestConsultation(formData);
          if (result.ok) {
            alert(result.message);
            window.location.reload();
          } else {
            alert(result.message);
          }
        }}
        className={styles.form}
      >
        <div className={styles.formContents}>
          <div className={styles.formRow}>
            <h5>이&nbsp;름</h5>
            <input
              type="text"
              name="name"
              className={`${styles.design} ${styles.input1}`}
              placeholder="예시 : 홍길동"
              required
            />
          </div>
          <div className={styles.formRow}>
            <h5>전화번호</h5>
            <input
              type="text"
              name="phone"
              className={`${styles.design} ${styles.input1}`}
              placeholder="예시 : 01012345678"
              required
            />
          </div>
        </div>
        <div className={styles.checkArea}>
          <label
            htmlFor="check1"
            className={`${styles.customChk} ${
              isChecked1 ? styles.checked : ""
            }`}
          ></label>
          <input
            onChange={handleCheckboxChange1}
            type="checkbox"
            id="check1"
            name="consent"
          />
          <div className={styles.labelContainer}>
            <label htmlFor="check1">
              개인정보 수집&middot;이용 동의 및 제3자 제공 동의
            </label>
            <button
              type="button"
              className={styles.termBtn}
              onClick={() => setIsConsentModalOpen(true)}
            >
              [약관보기]
            </button>
          </div>
        </div>
        <button className={styles.submitBtn}>상담 신청하기</button>
      </form>
      {isConsentModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsConsentModalOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </button>
            <div className={styles.text}>
              개인정보 수집∙이용 동의 약관
              <br />
              <br />
              (주)감추인 보화 (이하 &ldquo;회사&rdquo;)는 고객님의 개인정보를
              중요시하며, 「개인정보 보호법」에 따라 고객님의 개인정보를
              안전하게 관리하고 보호하기 위하여 다음과 같은 내용을 안내드립니다.
              <br />
              <br />
              1. 개인정보 수집 항목
              <br />
              회사는 고객 상담을 위해 다음과 같은 개인정보를 수집합니다.
              <br />
              필수 항목: 이름, 전화번호
              <br />
              <br />
              2. 개인정보 수집 및 이용 목적
              <br />
              회사는 수집된 개인정보를 다음의 목적을 위해 이용합니다.
              <br />
              고객 상담 및 응대: 고객님이 문의하신 사항에 대해 원활하게 상담
              서비스를 제공하기 위함
              <br />
              <br />
              3. 개인정보 보유 및 이용 기간
              <br />
              고객님의 개인정보는 수집 및 이용에 대한 동의일로부터 1년 동안
              보유하며, 해당 기간이 지난 후에는 즉시 파기합니다.
              <br />
              <br />
              4. 개인정보의 제3자 제공
              <br />
              회사는 원칙적으로 고객님의 개인정보를 외부에 제공하지 않습니다.
              다만, 관련 법령에 따라 예외적으로 제공이 필요한 경우에는
              고객님에게 사전 고지하여 동의를 구하겠습니다.
              <br />
              <br />
              5. 개인정보의 파기 절차 및 방법
              <br />
              회사는 보유 기간이 지난 개인정보를 지체 없이 파기합니다. 전자적
              파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을
              사용하여 삭제하며, 서면으로 작성된 개인정보는 분쇄기로 파쇄하거나
              소각을 통해 파기합니다.
              <br />
              <br />
              6. 개인정보의 안전성 확보 조치
              <br />
              회사는 개인정보의 안전성을 확보하기 위해 다음과 같은 조치를 취하고
              있습니다.
              <br />
              개인정보의 암호화 및 접근 제한
              <br />
              개인정보 처리 인력의 최소화 및 교육 실시
              <br />
              <br />
              7. 개인정보에 대한 권리 및 행사 방법
              <br />
              고객님은 언제든지 회사가 보유하고 있는 본인의 개인정보에 대해
              열람, 정정, 삭제, 처리 정지 요구 등의 권리를 행사할 수 있습니다.
              이를 위해 회사의 개인정보 보호 책임자에게 연락 주시면 신속하게
              처리하겠습니다.
              <br />
              <br />
              8. 개인정보 보호 책임자
              <br />
              회사는 고객님의 개인정보를 보호하고 개인정보와 관련된 불만을
              처리하기 위하여 아래와 같이 개인정보 보호 책임자를 지정하고
              있습니다.
              <br />
              개인정보 보호 책임자: 이유신
              <br />
              이메일: hugh.lee@superkos.co
              <br />
              전화번호: 010-5332-5120
              <br />
              <br />
              9. 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
              <br />
              고객님은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가
              있습니다. 다만, 동의를 거부하실 경우 고객 상담 서비스 제공에
              제한이 있을 수 있습니다.
              <br />
              <br />본 약관은 고객님의 개인정보 보호를 위해 마련되었으며,
              고객님께 충분히 설명된 후 동의를 받고자 합니다.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSection;

import { formateDate } from "../../utils/formatDate";
const DoctorAbout = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className="text-irisBlueColor text-[24px] font-bold leading-9">
              Shiv Singh
            </span>
          </h3>
          <p className="text__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            possimus eius molestiae vel exercitationem quisquam quod aperiam
            consectetur deleniti iste nobis, minima ea soluta quam quibusdam
            magni temporibus sit neque numquam. Ex assumenda beatae at animi
            porro ab, similique vero expedita? Consequuntur magnam impedit quasi
            id. Nam quidem ab aspernatur?
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Education
          </h3>

          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formateDate("03-28-2020")} - {formateDate("03-28-2024")}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                  PHD in Surgery
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New Delhi
              </p>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formateDate("03-28-2010")} - {formateDate("03-28-2015")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  PHD in Surgery
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New Delhi
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-12"></div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4  md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("03-28-2010")} - {formateDate("03-28-2015")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New Delhi
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("03-28-2010")} - {formateDate("03-28-2015")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New Delhi
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DoctorAbout;

"use client"
import Image from "next/image";

const CustomButton = ({title, containerStyles}) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn`}
            onClick={() => { }}
        >
            <span className={`flex-1`}>
                title
            </span>
        </button>
    );
};

export default CustomButton;
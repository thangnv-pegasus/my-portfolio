function TabHeading({ heading = "", subHeading = "" }) {
    return (
        <div className="">
            <h2 className="text-2xl font-medium text-lightest-slate font-font_sans">{heading}</h2>
            <p className="text-sm text-slate my-3">{subHeading}</p>
        </div>
    );
}


export default TabHeading

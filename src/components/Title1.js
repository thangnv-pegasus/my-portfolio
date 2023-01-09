

function Title1({children, className=""}){

    return (
        <div className={`flex items-center ` + className}>
            <span className="text-lightest-slate text-3xl font-semibold mr-4">{children}</span><p className="flex-1 md:flex-none w-80 h-[1px] bg-[#233554]"></p>
        </div>
    )
}

export default Title1
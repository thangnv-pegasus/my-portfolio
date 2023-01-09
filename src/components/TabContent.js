import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TabContent({ listContent = [] }) {
    return (
        <div>
            {listContent.map((item,index) => {
                return (
                <div className="flex sm:pr-0 lg:pr-32 my-3" key={index}>
                    <span className="mr-4 text-base-color translate-y-1">
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <div className="">
                        {item}
                    </div>
                </div>);
            })}
        </div>
    );
}

export default TabContent;

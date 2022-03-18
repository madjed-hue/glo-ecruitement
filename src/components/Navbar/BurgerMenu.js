import React from "react";
import { motion } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const BurgerMenu = ({ isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={isOpen ? "list" : "list closedList"}>
        <motion.div className="menu">
          {isOpen ? (
            <CloseOutlinedIcon sx={{ fontSize: 45 }} />
          ) : (
            <MenuOutlinedIcon sx={{ fontSize: 45 }} />
          )}
        </motion.div>
        <motion.ul className={isOpen ? "open" : "close"}>
          <li className="listItem">Home</li>
          <li className="listItem">Why Glo Recruitment</li>
          <li className="listItem">For Job Hunters</li>
          <li className="listItem">Employer Zone</li>
          <li className="listItem">Contact Us</li>
        </motion.ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

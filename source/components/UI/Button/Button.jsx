import classnames from "classnames";
import styles from './Button.module.scss';

const Button = ({children, icon, color, ...rest}) => {
    return (
        <button className={classnames(styles.button, styles[color])} {...rest}>
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </button>
    );
}

export default Button;
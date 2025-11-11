import { mergeClasses } from "@/utils/mergeClasses";
import { useRef, useState } from "react";
import { Button } from "../button";
import { Icon } from "../icon";
import cl from "./dropdown.module.css";
import { DropdownItem } from "./dropdownItem";

export const Dropdown = ({
  contentLeft,
  label,
  selected,
  value,
  onChange,
  options,
  listTitle,
  listTitleContentLeft,
  buttonProps,
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const closeDropdown = () => setIsDropdownOpened(false);
  const { className: buttonClassName, restButtonProps } = buttonProps || {};

  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const buttonFocusHandler = (e) => {
    if (e.code !== "Escape" && !e.code.startsWith("Arrow")) {
      return;
    }
    e.preventDefault();

    if (e.code === "Escape" && isDropdownOpened) {
      closeDropdown();
      return;
    }

    if (
      isDropdownOpened &&
      (e.code === "ArrowDown" || e.code === "ArrowRight")
    ) {
      listRef.current.firstElementChild.focus();
    }
  };

  const listFocusTrapHandler = (e) => {
    if (
      e.code !== "Tab" &&
      e.code !== "Escape" &&
      !e.code.startsWith("Arrow")
    ) {
      return;
    }
    e.preventDefault();
    const focusedEl = document.activeElement;
    let nextElement;
    if (e.code === "Escape") {
      closeDropdown();
      buttonRef.current.focus();
      return;
    }

    if (e.code === "ArrowDown" || e.code === "ArrowRight" || e.code === "Tab") {
      if (focusedEl === listRef.current.lastElementChild) {
        nextElement = listRef.current.firstElementChild;
      } else {
        nextElement = focusedEl.nextElementSibling;
      }
    }
    if (
      e.code === "ArrowUp" ||
      e.code === "ArrowLeft" ||
      (e.code === "Tab" && e.shiftKey)
    ) {
      if (focusedEl === listRef.current.firstElementChild) {
        nextElement = listRef.current.lastElementChild;
      } else {
        nextElement = focusedEl.previousElementSibling;
      }
    }

    nextElement?.focus?.();
  };

  return (
    <div className={cl.dropdownContainer}>
      <Button
        ref={buttonRef}
        className={mergeClasses(
          cl.dropdownButton,
          selected && cl.selected,
          isDropdownOpened && cl.dropdownOpened,
          buttonClassName
        )}
        view="secondary"
        size="small"
        contentLeft={contentLeft ?? null}
        contentRight={
          <Icon
            name="chevron"
            className={cl.dropdownIconChevron}
          />
        }
        onClick={() => setIsDropdownOpened(!isDropdownOpened)}
        onKeyDown={buttonFocusHandler}
        {...restButtonProps}>
        <span className={cl.dropdownTextWrapper}>{label}</span>
      </Button>
      <div
        className={mergeClasses(
          cl.optionsListWrapper,
          isDropdownOpened && cl.opened
        )}>
        {listTitle && (
          <div className={cl.optionsListTitle}>
            {listTitleContentLeft}
            {listTitle}
          </div>
        )}
        <ul
          ref={listRef}
          className={cl.optionsList}
          onKeyDown={listFocusTrapHandler}>
          {options?.map((option) => {
            return (
              <DropdownItem
                id={option.id}
                key={option.id}
                contentLeft={<Icon name={option.iconName} />}
                label={option.label}
                onSelect={() => {
                  onChange(option);
                  closeDropdown();
                }}
                contentRight={value.id === option.id && <Icon name="checked" />}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

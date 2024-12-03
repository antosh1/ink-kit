import { PropsWithChildren } from "react";
import { DefaultAppIcon } from "../../icons";
import { classNames } from "../../util/classes";

export interface InkLayoutProps extends PropsWithChildren {
  mainIcon?: React.ReactNode;
  headerContent?: React.ReactNode;
  sideNavigation?: React.ReactNode;
  topNavigation?: React.ReactNode;
}

export const InkLayout: React.FC<InkLayoutProps> = ({
  mainIcon = <DefaultAppIcon className="ink:size-6" />,
  headerContent,
  sideNavigation,
  topNavigation,
  children,
}) => {
  return (
    <div
      className={classNames(
        "ink:flex ink:flex-col ink:min-h-full ink:pb-5 ink:min-w-[320px] ink:font-default ink:text-text-default ink:gap-5 ink:box-border"
      )}
    >
      <div className="ink:w-full ink:flex ink:justify-between ink:items-center ink:gap-3 ink:px-5 ink:pt-4 ink:box-border">
        <div className="ink:flex ink:items-center ink:justify-start ink:size-6 ink:gap-2">
          {mainIcon}
        </div>
        {topNavigation && <div>{topNavigation}</div>}
        {headerContent ? (
          <div className="ink:flex ink:items-center">{headerContent}</div>
        ) : null}
      </div>
      <div className="ink:flex ink:flex-1 ink:mr-5 ink:box-border">
        {sideNavigation && (
          <div className={classNames("ink:w-[260px] ink:px-4")}>
            {sideNavigation}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

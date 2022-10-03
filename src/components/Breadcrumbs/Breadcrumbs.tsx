import React from "react";
import Link from "next/link";
import type { Breadcrumb } from "../../types";
import layout from "../../styles/Layout.module.css";

const Breadcrumbs: React.FC = () => {
  /**
   * TODO: dodaj listę breadcrumbów dla aktualnej strony
   */
  const items: Breadcrumb[] = [];

  return (
    <ul className={layout.breadcrumbs}>
      <li>
        <Link href="/">Strona główna</Link>
      </li>
      {items.map(() => {
        /**
         * TODO: wyświetl linki do nawigacji po breadcrumbach
         */
        return <></>;
      })}
    </ul>
  );
};

export default Breadcrumbs;

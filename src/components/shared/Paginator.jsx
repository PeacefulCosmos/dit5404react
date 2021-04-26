import { useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";

export const Paginator = ({ pageIndex, totalPage, setPageIndex }) => {
  const pageNumbers = [...new Array(totalPage)];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pageIndex]);

  const previousPage = () => {
    if (pageIndex > 1) {
      return setPageIndex(pageIndex - 1);
    }
  };
  const nextPage = () => {
    if (pageIndex < pageNumbers) {
      return setPageIndex(pageIndex + 1);
    }
  };

  return (
    <Menu floated="right" pagination>
      <Menu.Item onClick={previousPage} icon>
        <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map((_, number) => (
        <Menu.Item key={number + 1} onClick={() => setPageIndex(number + 1)}>
          {number + 1}
        </Menu.Item>
      ))}
      <Menu.Item onClick={nextPage} icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};

import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table ,Select} from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import Users from './Users.json';
const red = Users;


export const Table2 = () => {
  const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef(null);
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};
	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText("");
	};
const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div
			style={{
			  padding: 8,
			}}
			onKeyDown={(e) => e.stopPropagation()}
		  >
			<Input.Search
			  ref={searchInput}
			  placeholder={`Search ${dataIndex}`}
			  value={selectedKeys[0]}
			  onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
			  onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
			  style={{
				marginBottom: 8,
				display: 'block',
			  }}
			/>
			<Space>
			  <Button
				type="primary"
				onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
				icon={<SearchOutlined />}
				size="small"
				style={{
				  width: 90,
				}}
			  >
				Search
			  </Button>
			  <Button
				onClick={() => clearFilters && handleReset(clearFilters)}
				size="small"
				style={{
				  width: 90,
				}}
			  >
				Reset
			  </Button>
			  <Button
				type="link"
				size="small"
				onClick={() => {
				  close();
				}}
			  >
				close
			  </Button>
			</Space>
		  </div>
		),
		filterIcon: (filtered) => (
		  <SearchOutlined
			style={{
			  color: filtered ? '#1890ff' : undefined,
			}}
		  />
		),
		onFilter: (value, record) =>
		  record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
		  if (visible) {
			setTimeout(() => searchInput.current?.select(), 100);
		  }
		},
		render: (text) =>
		searchedColumn === dataIndex ? (
			<Highlighter
			highlightStyle={{
				backgroundColor: "#ffc069",
				padding: 0,
			}}
			searchWords={[searchText]}
			autoEscape
			textToHighlight={text ? text.toString() : ""}
			/>
		) : (
			text
		),
	});
	const columns=[
		{
		title: "Уникальный идентификатор пользователя (ключ)",
		dataIndex: "id",
		width: "30%",
		...getColumnSearchProps("name"),
		},
		{
		title: "Логин",
		dataIndex: "login",
		width: "20%",
		},
		{
		title: "Пароль",
		dataIndex: "password",
		},
		{
		title: "Имя пользователя",
		dataIndex: "name",
		filters: [
			{
			  text: 'Имя',
			  value: 'Имя',
			  children: [
				{
				  text: 'А',
				  value: 'А',
				},
				{
				  text: 'Б',
				  value: 'Б',
				},
				{
					text: 'В',
					value: 'В',
				  },
				  {
					text: 'Г',
					value: 'Г',
				  },

				  {
					text: 'Д',
					value: 'Д',
				  },
				  {
					text: 'Е',
					value: 'Е',
				  },
				  {
					text: 'Ж',
					value: 'Ж',
				  },
				  {
					text: 'З',
					value: 'З',
				  },

				  {
					text: 'И',
					value: 'И',
				  },
				  {
					text: 'К',
					value: 'К',
				  },
				  {
					text: 'Л',
					value: 'Л',
				  },
				  {
					text: 'М',
					value: 'М',
				  },
				  {
					text: 'Н',
					value: 'Н',
				  },
				  {
					text: 'О',
					value: 'О',
				  },
				  {
					text: 'П',
					value: 'П',
				  },
				  {
					text: 'Р',
					value: 'Р',
				  },
				  {
					text: 'С',
					value: 'С',
				  },
				  {
					text: 'Т',
					value: 'Т',
				  },
				  {
					text: 'У',
					value: 'У',
				  },
				  {
					text: 'Ф',
					value: 'Ф',
				  },
				  {
					text: 'Х',
					value: 'Х',
				  },
				  {
					text: 'Ц',
					value: 'Ц',
				  },
				  {
					text: 'Ч',
					value: 'Ч',
				  },
				  {
					text: 'Ш',
					value: 'Ш',
				  },
				  {
					text: 'Э',
					value: 'Э',
				  },
				  {
					text: 'Ю',
					value: 'Ю',
				  },
				  {
					text: 'Я',
					value: 'Я',
				  },
			  ],
			},
		  ],
		  filterMode: 'tree',
		  filterSearch: true,
		  onFilter: (value, record) => record.name.startsWith(value),
		  width: '20%',
		},
		{
		title: "Тип пользователя",
		dataIndex: "type_id",
		},
		{
		title: "Дата последнего визита",
		dataIndex: "last_visit_date",
		},
	];
  return (	
    <>
 <Table columns={columns} dataSource={red}/>;
    </>
  )
};










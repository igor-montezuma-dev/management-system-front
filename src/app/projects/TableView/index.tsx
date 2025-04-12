import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { useGetTasksQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type TableViewProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Título",
    width: 100,
  },
  {
    field: "description",
    headerName: "Descrição",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => (
      <span className="inline-flex rounded-full bg-green-100 px-2 text-sm font-semibold leading-5 text-green-800">
        {params.value}
      </span>
    ),
  },
  {
    field: "priority",
    headerName: "Prioridade",
    width: 130,
    renderCell: (params) => {
      const priorityColors = {
        Urgent: "bg-red-100 text-red-800",
        High: "bg-orange-100 text-orange-800",
        Medium: "bg-yellow-100 text-yellow-800",
      };

      const colorClass =
        priorityColors[params.value as keyof typeof priorityColors] ||
        "bg-gray-100 text-gray-800";

      return (
        <span
          className={`inline-flex rounded-full px-2 text-sm font-semibold leading-5 ${colorClass}`}
        >
          {params.value === "Urgent" && "Urgente"}
          {params.value === "High" && "Alta"}
          {params.value === "Medium" && "Média"}
          {params.value === "Low" && "Baixa"}
        </span>
      );
    },
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Data de início",
    width: 130,
  },
  {
    field: "dueDate",
    headerName: "Data de término",
    width: 130,
  },
  {
    field: "author",
    headerName: "Autor",
    width: 125,
    renderCell: (params) => params.value.username || "Não definido",
  },
  {
    field: "assignee",
    headerName: "Atribuído",
    width: 125,
    renderCell: (params) => params.value.username || "Não atribuído",
  },
];

const TableView = ({ id, setIsModalNewTaskOpen }: TableViewProps) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ocorreu um erro ao buscar as tasks</div>;

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Tabela"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Criar nova tarefa
            </button>
          }
          isSmallText
        />
        <DataGrid
          rows={tasks || []}
          columns={columns}
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default TableView;

export default function Pagination({page, setPage}: { page: number; setPage: (p: number)=> void}) {
  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
   setPage(page + 1);
  };
  return (
    <div>
        <div className="flex items-center gap-4 mt-6">
        <button
            onClick={prevPage}
            disabled={page === 1}//asi no va a atras de la primera
            className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
            Anterior
        </button>

        <button
            onClick={nextPage}
            className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
            Siguiente
        </button>
        </div>
        <div className="mt-4">
            <span>
                Pagina {page}
            </span>
        </div>
    </div>
  );
}
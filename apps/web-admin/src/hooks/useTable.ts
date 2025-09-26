import { computed, ref } from 'vue';
import { usePagination } from '@bricklayer/hooks/usePagination';
import { getTableData } from '~/request';

interface IParams {
  keywords: string;
  region: string;
  date: string[];
  check: boolean;
}

class CParams implements IParams {
  keywords = '';
  region = '';
  date = [];
  check = false;
}

export function useTable(service?: any) {
  const _params = ref(new CParams());

  const { loading, params, data, run, pageProps, currentPage, pageSize } =
    usePagination(service || getTableData, {
      data: [],
      params: _params,
    });

  const search = () => {
    run();
  };

  const reset = () => {
    params.value = new CParams();
    run();
  };

  const refresh = () => {
    run();
  };

  const onAdd = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const onEdit = async (row: any) => {
    console.log('onEdit', row);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const onDelete = async (row: any) => {
    console.log('onDelete', row);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return {
    loading,
    data: computed(() => data.value?.list),
    params,
    search,
    reset,
    refresh,
    run,
    onAdd,
    onEdit,
    onDelete,
    pageProps,
    currentPage,
    pageSize,
  };
}

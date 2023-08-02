import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';

const ArticleList = ({products,deleteProduct}) => {
  const delprod=(productId,des)=>{
    deleteProduct(productId,des)
    }
  const columns = useMemo(
    () => [
      {
        accessorKey: 'reference',
        header: 'Référence',
        size: 100,
      },
      {
        accessorKey: 'designation',
        header: 'Désignation',
        size: 150,
      },
      {
        accessorKey: 'marque',
        header: 'Marque',
        size: 80,
      },
      {
        accessorKey: 'prix',
        header: 'Prix',
        size: 80,
      },
      {
        accessorKey: 'qtestock',
        header: 'Quantité',
        size: 80,
      },
      {
        accessorKey: 'imageart',
        header: 'Image',
        Cell: ({ cell}) => (
          <Box
          sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          }}
          >
          <img
          alt=""
          height={100}
          src={cell.getValue()}
          loading="lazy"
          style={{ borderRadius: '20%' }}
          />
          
          </Box>),
      },
      {
        accessorKey: '_id',
        header: 'actions',
        size: 100,
        Cell: ({ cell, row }) => (
          <div >
          <Button
          onClick={() => {
          console.log("modification ...")
          }}
          variant="warning"
          size="md"
          className="text-warning btn-link edit"
          >
          <i class="fa-solid fa-pen-to-square"></i>
          </Button>
          <Button
          onClick={(e) => {
          delprod(cell.row.original._id,cell.row.original.designation ,e);
          }}
          variant="danger"
          size="md"
          className="text-danger btn-link delete"
          >
          <i className="fa fa-trash" />
          </Button>
          </div>
          ),
          },
    ],
    [products],
  )
  return (
    <>
      {products &&
      <MaterialReactTable columns={columns} data={products} />
      }
    </>
  )
}

export default ArticleList

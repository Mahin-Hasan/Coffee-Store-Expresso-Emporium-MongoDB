import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id =>{
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            console.log('delete confirmed');
            }
          });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-4">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn w-full btn-active">View</button> <br />
                            <button className="btn w-full">Edit</button><br />
                            <button onClick={()=> handleDelete(_id)} className="btn w-full bg-orange-600">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
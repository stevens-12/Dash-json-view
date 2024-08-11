import React, { useState } from "react";
import axios from "axios";
import JsonViewer from "./JsonViewer";
import TreeViewer from "./treeViewer";

const Axios = () => {
    const [list, setList] = useState([]);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editing, setEditing] = useState(false);
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [method, setMethod] = useState('GET');

    const handleImport = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setList(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (key, value) => {
        setEditing(true);
        setKey(key);
        setValue(value);
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${url}/${key}`, { value });
            setList(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setEditing(false);
        }
    };

    return (
        <div className="container mx-auto p-4 h-screen flex flex-col">
            <h1 className="text-xl font-bold mb-4">Import JSON</h1>
            <form className="flex flex-wrap justify-center p-6 gap-4">
                <div className="flex w-full lg:w-3/4 xl:w-2/3">
                    <select
                        className="bg-indigo-600 text-white text-sm p-4 rounded-l border border-gray-400"
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Ingrese la URL de la API"
                        className="w-full p-4 border-t border-r border-b border-gray-400 rounded-r"
                        required
                    />
                </div>
                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={handleImport}
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Importar'}
                </button>
            </form>

            {error && (
                <div className="text-red-500 text-sm mt-2">
                    {error}
                </div>
            )}
            <div className="flex-1 flex h-screen">
                <div className="flex-1 h-screen">
                    <h1 className="text-xl font-bold mb-4">Code View</h1>
                    <div className="h-full w-full pr-2 overflow-auto">
                        <TreeViewer
                            value={JSON.stringify(list, null, 2)}
                            onChange={(value) => setList(JSON.parse(value))}
                        />
                    </div>
                </div>
                <div className="flex-1 h-screen">
                    <h1 className="text-xl font-bold mb-4">Tree View</h1>

                    <JsonViewer data={list} onEdit={handleEdit} />
                </div>
            </div>
        </div>
    );
};

export default Axios;
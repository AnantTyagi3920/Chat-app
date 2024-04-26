const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={"label gap-2 cursor-pointer"}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900 checked:border-indigo-600 [--chkbg:theme(colors.indigo.600)]" />
                </label>
            </div>
            <div className="form-control">
                <label className={"label gap-2 cursor-pointer"}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900 checked:border-pink-600 [--chkbg:theme(colors.pink.600)]" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;

<h3>{%= classname %}</h3>
<table>
    <thead>
        <tr>
            <td>學號</td>
            <td>姓名</td>
            <td>成績</td>
        </tr>
    </thead>
    <tbody>
        {%each(index,val) studs %}
        <tr>
            <td>{%= val.studno %}</td>
            <td>{%= val.studname %}</td>
            <td>{%= val.score %}</td>
        </tr>
        {%/each %}
    </tbody>
</table>
import { List, Card } from "antd";
import moment from "moment";
import React from "react";

const data = [
  {
    name: "Juan Dela Cruz",
    description: "Racing car sprays burning fuel into crowd.",
    date: moment().fromNow(),
  },
  {
    name: "Juan Dela Cruz",
    description: "Racing car sprays burning fuel into crowd.",
    date: moment().fromNow(),
  },
  {
    name: "Juan Dela Cruz",
    description: "Racing car sprays burning fuel into crowd.",
    date: moment().fromNow(),
  },
  {
    name: "Juan Dela Cruz",
    description: "Racing car sprays burning fuel into crowd.",
    date: moment().fromNow(),
  },
  {
    name: "Juan Dela Cruz",
    description: "Racing car sprays burning fuel into crowd.",
    date: moment().fromNow(),
  },
];

const ActivityLogCard = () => {
  return (
    <Card title="Acitivity Logs">
      <div className="activity-log-card">
        <List
          size="large"
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className="flex-column">
                <span className="activity-name">{item.name}</span>
                <span className="activity-description">{item.description}</span>
                <span className="announcement-date">{item.date}</span>
              </div>
            </List.Item>
          )}
        />
      </div>
    </Card>
  );
};

export default ActivityLogCard;

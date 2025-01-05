import React from "react";
import { Phone, Clock, Calendar, X, DollarSign, Plus } from "lucide-react";
import { Card, CardContent } from "@mui/material";

const PerformanceMetrics = () => {
  const metrics = [
    { icon: Phone, label: "Calls Made", value: "1,234", change: "+12%" },
    { icon: Clock, label: "Total Time", value: "256h", change: "+8%" },
    { icon: Calendar, label: "Meetings Booked", value: "89", change: "+15%" },
    { icon: X, label: "Unsuccessful Calls", value: "45", change: "-5%" },
    { icon: DollarSign, label: "Total Costs", value: "$2.5k", change: "+10%" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Voice Agents Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <metric.icon className="h-6 w-6 text-gray-500" />
                  <span className="text-sm text-gray-600">{metric.change}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;
